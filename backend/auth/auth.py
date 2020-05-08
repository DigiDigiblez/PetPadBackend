import json
import toml

from functools import wraps
from flask import request, abort
from jose import jwt
from six.moves.urllib.request import urlopen

from backend.constants.constants import AUTH_HEADER_ERR, RESPONSE

# Auth0 identity provider config variables
auth0Config = toml.load(r"backend/configurations/auth0.toml")

AUTH0_DOMAIN = auth0Config["Auth0"]["AUTH0_DOMAIN"]
ALGORITHMS = auth0Config["Auth0"]["AUTH0_ALGORITHM"]
API_AUDIENCE = auth0Config["Auth0"]["AUTH0_API_AUDIENCE"]


# Error handler
class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code


# Retrieve token from auth header
def get_token_auth_header():
    if "Authorization" not in request.headers:
        raise AuthError({
            "code": AUTH_HEADER_ERR["INVALID_HEADER"],
            "description": "Authorization header is missing"
        }, RESPONSE["401_UNAUTHORIZED"])

    # Dissect header
    header_parts = request.headers["Authorization"].split()
    bearer_prefix = header_parts[0]
    auth_token = header_parts[1]

    if not bearer_prefix:
        raise AuthError({
            "code": AUTH_HEADER_ERR["INVALID_HEADER"],
            "description": "Authorization header is missing bearer prefix"
        }, RESPONSE["401_UNAUTHORIZED"])

    elif bearer_prefix and len(header_parts) == 1:
        raise AuthError({
            "code": AUTH_HEADER_ERR["INVALID_HEADER"],
            "description": "Authorization header is missing auth token"
        }, RESPONSE["401_UNAUTHORIZED"])

    elif len(header_parts) > 2:
        raise AuthError({
            "code": AUTH_HEADER_ERR["INVALID_HEADER"],
            "description": "Authorization header is malformed"
        }, RESPONSE["401_UNAUTHORIZED"])

    return auth_token


# JWT verification
def verify_decode_jwt(token):
    jsonurl = urlopen(f"https://{AUTH0_DOMAIN}/.well-known/jwks.json")
    jwks = json.loads(jsonurl.read())
    unverified_header = jwt.get_unverified_header(token)
    rsa_key = {}

    if "kid" not in unverified_header:
        raise AuthError({
            "code": AUTH_HEADER_ERR["INVALID_HEADER"],
            "description": "Authorization malformed."
        }, RESPONSE["401_UNAUTHORIZED"])

    for key in jwks["keys"]:
        if key["kid"] == unverified_header["kid"]:
            rsa_key = {
                "kty": key["kty"],
                "kid": key["kid"],
                "use": key["use"],
                "n": key["n"],
                "e": key["e"]
            }

    if rsa_key:
        try:
            payload = jwt.decode(
                token,
                rsa_key,
                algorithms=ALGORITHMS,
                audience=API_AUDIENCE,
                issuer=f"https://{AUTH0_DOMAIN}/"
            )

            return payload

        except jwt.ExpiredSignatureError:
            raise AuthError({
                "code": AUTH_HEADER_ERR["TOKEN_EXPIRED"],
                "description": "Token expired."
            }, RESPONSE["401_UNAUTHORIZED"])

        except jwt.JWTClaimsError:
            raise AuthError({
                "code": AUTH_HEADER_ERR["INVALID_CLAIMS"],
                "description":
                    "Incorrect claims. Please, check the audience and issuer."
            }, RESPONSE["401_UNAUTHORIZED"])

        except Exception:
            raise AuthError({
                "code": AUTH_HEADER_ERR["INVALID_HEADER"],
                "description": "Unable to parse authentication token."
            }, RESPONSE["400_BAD_REQUEST"])

    raise AuthError({
        "code": AUTH_HEADER_ERR["INVALID_HEADER"],
        "description": "Unable to find the appropriate key."
    }, RESPONSE["400_BAD_REQUEST"])


# Check user permissions
def check_permissions(permission, payload, user_id):
    try:
        # Validate permission scope
        if permission not in payload["permissions"] and permission != "":
            raise AuthError({
                "code": AUTH_HEADER_ERR["FORBIDDEN"],
                "description": "Insufficient permission to perform the request."
            }, RESPONSE["403_FORBIDDEN"])

        # Validate if the user is accessing their personal resource
        if payload["sub"] != user_id and user_id != "":
            raise AuthError({
                "code": AUTH_HEADER_ERR["FORBIDDEN"],
                "description": "You do not have permission to perform this task on another user resource."
            }, RESPONSE["403_FORBIDDEN"])

    except AuthError:
        raise

    except Exception as ex:
        raise AuthError({
            "code": AUTH_HEADER_ERR["INVALID_KEY"],
            "description": "Authorisation token does not contain permission."
                           "Ensure that RBAC is enabled and the user has an appropriate role assigned "
        }, RESPONSE["401_UNAUTHORIZED"])


# Decorator for user authentication and authorisation
def requires_auth(permission=""):
    def requires_auth_decorator(f):
        @wraps(f)
        def wrapper(self, *args, **kwargs):
            try:
                # Retrieve jwt from auth header
                jwt = get_token_auth_header()

                # Grab the payload from decoded jwt
                payload = verify_decode_jwt(jwt)

                # Check if user has any / requested permission(s)
                check_permissions(permission, payload, "")

            except AuthError as err:
                abort(err.status_code, err.error)

            return f(self, payload, *args, **kwargs)

        return wrapper

    return requires_auth_decorator

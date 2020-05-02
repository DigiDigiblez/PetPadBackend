import logging

RESPONSE_CODE = {
    # Success codes
    "200_OK": 200,

    # Client error codes
    "400_BAD_REQUEST": 400,
    "401_UNAUTHORIZED": 401,
    "403_FORBIDDEN": 403,
    "404_RESOURCE_NOT_FOUND": 404,
    "422_UNPROCESSABLE_ENTITY": 422,

    # Server error codes
    "500_INTERNAL_SERVER_ERROR": 500
}

AUTH_HEADER_ERR = {
    "FORBIDDEN": "forbidden",
    "INVALID_CLAIMS": "invalid_claims",
    "INVALID_HEADER": "invalid_header",
    "INVALID_KEY": "invalid_key",
    "TOKEN_EXPIRED": "token_expired",
}

ENV = {
    "LOCAL": "local",
    "DEV": "dev",
    "TEST": "test",
    "PROD": "prod",
}

LOG_LEVEL = {
    "INFO": logging.INFO,
    "DEBUG": logging.DEBUG,
}

API = {
    "VERSION": "1.0",
    "TITLE": "Pet Pad API",
    "DESCRIPTION": "Backend API for the Pet Pad React-based SPA",
    "PREFIX": "/api/v1",
}
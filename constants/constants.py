import logging

RESPONSE = {
    # Success codes
    "200_OK": [200, "OK"],  # GET requests
    "201_CREATED": [201, "Created"],  # POST requests
    "204_NO_CONTENT": [204, "No content"],  # DELETE, PATCH, PUT requests

    # Client error codes
    "400_BAD_REQUEST": [400, "Bad request"],
    "401_UNAUTHORIZED": [401, "Unauthorised"],
    "403_FORBIDDEN": [403, "Forbidden"],
    "404_RESOURCE_NOT_FOUND": [404, "Resource not found"],
    "405_METHOD_NOT_ALLOWED": [405, "Method not allowed"],
    "422_UNPROCESSABLE_ENTITY": [422, "Unprocessable entity"],

    # Server error codes
    "500_INTERNAL_SERVER_ERROR": [500, "Internal server error"]
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

# APPLICATION ENTRY POINT / CONFIGURATION
import logging
import os

from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_restx import Api
from flask_sqlalchemy import SQLAlchemy
from auth.auth import AuthError, RESPONSE_CODE

from constants import LOG_LEVEL, ENV, API

app = Flask(__name__)

logger = logging.getLogger("petpad_logger")

# LIVE environment configuration
if os.environ["ENV"] == ENV["PROD"]:
    # Logging
    logger.level = LOG_LEVEL["INFO"]
    logging.getLogger("flask_cors").level = LOG_LEVEL["INFO"]

    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ["SQLALCHEMY_DATABASE_URI"]
    app.config.from_pyfile(os.path.join(".", "configurations/api.conf"), silent=True)

# DEV environment configuration
elif os.environ["ENV"] == ENV["DEV"]:
    # Logging
    logger.level = LOG_LEVEL["DEBUG"]
    logging.getLogger("flask_cors").level = LOG_LEVEL["DEBUG"]

    app.config.from_pyfile(os.path.join(".", "configurations/api.dev.conf"), silent=True)

# TEST environment configuration
elif os.environ["ENV"] == ENV["TEST"]:
    # Logging
    logger.level = LOG_LEVEL["DEBUG"]
    logging.getLogger("flask_cors").level = LOG_LEVEL["DEBUG"]

    app.config.from_pyfile(os.path.join(".", "configurations/api.test.conf"), silent=True)

# LOCAL environment configuration
else:
    # Logging
    logging.getLogger("flask_cors").level = logging.DEBUG
    logger.level = logging.DEBUG

    app.config.from_pyfile(os.path.join(".", "configurations/api.local.conf"), silent=True)

# Configure logger
logging.basicConfig()

# Configure database
db = SQLAlchemy()
db.app = app
db.init_app(app)

# Configure Swagger UI
api = Api(
    app,
    version=API["VERSION"],
    title=API["TITLE"],
    description=API["DESCRIPTION"],
    prefix=API["PREFIX"]
)

# Add CORS support to application
CORS(app)


# Configure CORS
@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization, True")
    response.headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, PUT, OPTIONS")
    return response


# Application status
@app.route(f"{API['PREFIX']}/status")
@cross_origin()
def app_status():
    logger.info(f"Someone's checking on Pet Pad's well-being from {request.remote_addr}")

    response = {
        "message": "Pet Pad is running!",
        "success": True
    }

    return jsonify(response), RESPONSE_CODE["200_OK"]

# import all controllers
from controllers import *

# Error Handling
@app.errorhandler(RESPONSE_CODE["400_BAD_REQUEST"])
def bad_request(err):
    print(err)

    response = {
        "success": False,
        "error": RESPONSE_CODE["400_BAD_REQUEST"],
        "message": "Bad request",
    }

    return jsonify(response), RESPONSE_CODE["400_BAD_REQUEST"]


@app.errorhandler(RESPONSE_CODE["404_RESOURCE_NOT_FOUND"])
def resource_not_found(err):
    print(err)

    response = {
        "success": False,
        "error": RESPONSE_CODE["404_RESOURCE_NOT_FOUND"],
        "message": "Resource not found",
    }

    return jsonify(response), RESPONSE_CODE["404_RESOURCE_NOT_FOUND"]


@app.errorhandler(RESPONSE_CODE["422_UNPROCESSABLE_ENTITY"])
def unprocessable_entity(err):
    print(err)

    response = {
        "success": False,
        "error": RESPONSE_CODE["422_UNPROCESSABLE_ENTITY"],
        "message": "Unprocessable entity",
    }

    return jsonify(response), RESPONSE_CODE["422_UNPROCESSABLE_ENTITY"]


@app.errorhandler(RESPONSE_CODE["500_INTERNAL_SERVER_ERROR"])
def internal_server_error(err):
    print(err)

    response = {
        "success": False,
        "error": RESPONSE_CODE["500_INTERNAL_SERVER_ERROR"],
        "message": "Internal server error",
    }

    return jsonify(response), RESPONSE_CODE["500_INTERNAL_SERVER_ERROR"]


@app.errorhandler(AuthError)
def auth_error(exception):
    print(exception)

    response = jsonify(exception.error)
    response.status_code = exception.status_code
    return response


if __name__ == "__main__":
    app.run()

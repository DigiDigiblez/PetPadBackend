# APPLICATION ENTRY POINT / CONFIGURATION
import logging
import os

from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_migrate import Migrate
from flask_restx import Api
from flask_sqlalchemy import SQLAlchemy

from backend.auth.auth import AuthError, RESPONSE
from backend.constants.constants import API, ENV, LOG_LEVEL

app = Flask(__name__)

logger = logging.getLogger("petpad_logger")

# Try and configure project based on current environment
try:
    if os.environ["ENV"] == ENV["PROD"]:
        # Additional configuration for LIVE environment
        app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
        app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
        app.config["ERROR_404_HELP"] = True

        logger.level = LOG_LEVEL["INFO"]
        logging.getLogger("flask_cors").level = LOG_LEVEL["INFO"]

    # Additional configuration for LOCAL, DEV, and TEST environments
    else:
        app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
        app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
        app.config["ERROR_404_HELP"] = False

        logger.level = LOG_LEVEL["DEBUG"]
        logging.getLogger("flask_cors").level = LOG_LEVEL["DEBUG"]

# Something went wrong with configuration
except Exception as ex:
    logger.exception(ex)

# Configure logger
logging.basicConfig()

# Configure database
db = SQLAlchemy()
db.app = app

# Initialise app with db (SQLAlchemy) and migration support (Flask Migrate)
db.init_app(app)
Migrate(app, db)

# Configure Swagger UI
api = Api(
    app,
    version=API["VERSION"],
    title=API["TITLE"],
    description=API["DESCRIPTION"],
    prefix=API["PREFIX"]
)

# Add CORS support to application
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_SUPPORTS_CREDENTIALS'] = True


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
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

    return jsonify(response), RESPONSE["200_OK"][0]


# noinspection PyUnresolvedReferences
from backend.controllers import *


# Error Handling
@app.errorhandler(RESPONSE["400_BAD_REQUEST"][0])
def bad_request(err):
    logger.error(err)

    response = {
        "success": False,
        "error": RESPONSE["400_BAD_REQUEST"][0],
        "message": RESPONSE["400_BAD_REQUEST"][1],
    }

    return jsonify(response), RESPONSE["400_BAD_REQUEST"][0]


@app.errorhandler(RESPONSE["404_RESOURCE_NOT_FOUND"][0])
def resource_not_found(err):
    logger.error(err)

    response = {
        "success": False,
        "error": RESPONSE["404_RESOURCE_NOT_FOUND"][0],
        "message": RESPONSE["404_RESOURCE_NOT_FOUND"][1],
    }

    return jsonify(response), RESPONSE["404_RESOURCE_NOT_FOUND"][0]


@app.errorhandler(RESPONSE["405_METHOD_NOT_ALLOWED"][0])
def method_not_allowed(err):
    logger.error(err)

    response = {
        "success": False,
        "error": RESPONSE["405_METHOD_NOT_ALLOWED"][0],
        "message": RESPONSE["405_METHOD_NOT_ALLOWED"][1],
    }

    return jsonify(response), RESPONSE["405_METHOD_NOT_ALLOWED"][0]


@app.errorhandler(RESPONSE["422_UNPROCESSABLE_ENTITY"][0])
def unprocessable_entity(err):
    logger.error(err)

    response = {
        "success": False,
        "error": RESPONSE["422_UNPROCESSABLE_ENTITY"][0],
        "message": RESPONSE["422_UNPROCESSABLE_ENTITY"][1],
    }

    return jsonify(response), RESPONSE["422_UNPROCESSABLE_ENTITY"][0]


@app.errorhandler(RESPONSE["500_INTERNAL_SERVER_ERROR"][0])
def internal_server_error(err):
    logger.error(err)

    response = {
        "success": False,
        "error": RESPONSE["500_INTERNAL_SERVER_ERROR"][0],
        "message": RESPONSE["500_INTERNAL_SERVER_ERROR"][1],
    }

    return jsonify(response), RESPONSE["500_INTERNAL_SERVER_ERROR"][0]


@app.errorhandler(AuthError)
def auth_error(exception):
    print(exception)

    response = jsonify(exception.error)
    response.status_code = exception.status_code
    return response

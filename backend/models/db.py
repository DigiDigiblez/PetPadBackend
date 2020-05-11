import os

from backend.app import db


def setup_db(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://{}/{}".format('localhost:5432', "petpadtest")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    app.secret_key = os.environ.get('APP_SECRET_KEY')
    db.init_app(app)
    db.create_all()

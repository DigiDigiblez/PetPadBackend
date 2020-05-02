from dataclasses import dataclass
from datetime import datetime

from app import db


@dataclass
class Pet(db.Model):
    __tablename__ = "pets"
    id: int = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name: str = db.Column(db.String(80), nullable=False)
    gender: str = db.Column(db.String(10), nullable=False)
    species: str = db.Column(db.String(50), nullable=False)
    breed: str = db.Column(db.String(80), nullable=False)
    weight: float = db.Column(db.Float, nullable=False)
    height: float = db.Column(db.Float, nullable=False)
    birthday: datetime = db.Column(db.DateTime, nullable=False)
    favourite_toy: str = db.Column(db.String(100), nullable=False)
    favourite_food: str = db.Column(db.String(100), nullable=False)
    personality_trait: str = db.Column(db.String(50), nullable=False),
    social_google_plus_url: str = db.Column(db.String(500), nullable=True)
    social_facebook_url: str = db.Column(db.String(500), nullable=True)
    social_twitter_url: str = db.Column(db.String(500), nullable=True)
    social_instragram_url: str = db.Column(db.String(500), nullable=True)

    # TODO
    # pad = db.relationship("Pad")
    # assistant = db.relationship("Assistant")

    # Insert new Pet record into the database
    def insert(self):
        try:
            self.validate()
            db.session.add(self)
            db.session.commit()

        except Exception as ex:
            db.session.rollback()
            raise ex

        finally:
            db.session.close()

    # Delete existing Pet record from database
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        db.session.close()

    # Update existing Pet record in the database
    def update(self, updated_properties=None):
        try:
            if updated_properties is not None:
                for pet_property in [
                    "name",
                    "gender",
                    "species",
                    "breed",
                    "weight",
                    "height",
                    "birthday",
                    "favourite_toy",
                    "favourite_food",
                    "personality_trait",
                    "social_google_plus_url",
                    "social_facebook_url",
                    "social_twitter_url",
                    "social_instragram_url",
                ]:
                    if pet_property in updated_properties:
                        setattr(self, pet_property, updated_properties[pet_property])

            self.validate()
            db.session.commit()

        except Exception as ex:
            db.session.rollback()
            raise ex

        finally:
            db.session.close()

    # Validate Pet model data
    def validate(self):
        if self.target_weight < 0:
            raise ValueError("target_weight must be greater or equal to zero")

        if self.height < 0:
            raise ValueError("height must be greater or equal to zero")

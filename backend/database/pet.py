import re
from dataclasses import dataclass
from datetime import datetime

from backend.app import db


@dataclass
class Pet(db.Model):
    __tablename__ = "Pet"
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
    personality_trait: str = db.Column(db.String(50), nullable=False)
    profile_image: str = db.Column(db.String(100000), nullable=False)
    profile_completed: bool = db.Column(db.Boolean, nullable=False, default=False)

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
                    "profile_image",
                    "profile_completed",
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

    # Prevent bad data from entering db
    def validate(self):
        genders = ["male", "female"]

        if float(self.weight) < 0.0:
            raise ValueError("Weight must exceed zero")

        if float(self.height) < 0.0:
            raise ValueError("Height must exceed zero")

        if self.gender.lower() not in genders:
            raise ValueError("Gender must be male or female")

        if not re.match(r"^[a-zA-Z0-9]+", self.name):
            raise ValueError("Name must only use a mix of letters, and numbers")

        if not re.match(r"^[A-Z][a-z]*( [A-Z][a-z]*)*$", self.breed):
            raise ValueError("Breed must only use a mix of single-spaced capitalised words")

        if not re.match(r"^[A-Z][a-z]*( [A-Z][a-z]*)*$", self.species):
            raise ValueError("Species must only use a mix of single-spaced capitalised words")

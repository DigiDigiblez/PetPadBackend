from dataclasses import dataclass

from backend.app import db


@dataclass
class Post(db.Model):
    __tablename__ = "Post"
    id: int = db.Column(db.Integer, primary_key=True, autoincrement=True)
    mood: str = db.Column(db.String(30), nullable=False)
    content: str = db.Column(db.String(100000), nullable=False)

    # Insert new Post record into the database
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

    # Delete existing Post record from database
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        db.session.close()

    # Update existing Post record in the database
    def update(self, updated_properties=None):
        try:
            if updated_properties is not None:
                for post_property in [
                    "mood",
                    "content",
                ]:
                    if post_property in updated_properties:
                        setattr(self, post_property, updated_properties[post_property])

            self.validate()
            db.session.commit()

        except Exception as ex:
            db.session.rollback()
            raise ex

        finally:
            db.session.close()

    # Prevent bad data from entering db
    def validate(self):
        moods = ["excited", "happy", "okay", "sad", "angry", "exhausted"]

        if self.mood.lower() not in moods:
            raise ValueError("Mood not recognised, might be a bug!")

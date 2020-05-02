from flask_restx import Resource

from app import api
from database.pet import Pet
from models.pet import pet_list_model

pet_ns = api.namespace("pets", description="Pet endpoints")


@pet_ns.route("/")
class Index(Resource):

    @pet_ns.marshal_list_with(pet_list_model)
    def get(self, payload):
        all_pets = Pet.query.all()

        response = {
            "pets": all_pets,
            "total_pets": len(all_pets),
        }

        return response

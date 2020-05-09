from flask_restx import Resource, abort
from sqlalchemy.exc import IntegrityError

from backend.app import api, logger, db
from backend.constants.constants import RESPONSE

from backend.database.pet import Pet
from backend.models.pet import pet_list_model, pet_model

from backend.helpers.extract_exception import extract_exception

pet_ns = api.namespace("pets", description="Pet endpoints")


# Handles GET, POST requests (requiring no pet id)
@pet_ns.route("/")
class PetsNoID(Resource):

    # GET "/pets/" endpoint
    @pet_ns.marshal_list_with(pet_list_model, code=RESPONSE["200_OK"][0], description=RESPONSE["200_OK"][1])
    def get(self):
        # Retrieve all pets from newest to oldest
        all_pets = Pet.query.order_by(db.desc(Pet.id)).all()

        response = {
            "pets": all_pets,
            "total_pets": len(all_pets),
        }

        return response, RESPONSE["200_OK"][0]

    # POST "/pets/" endpoint
    @pet_ns.marshal_with(pet_model, code=RESPONSE["201_CREATED"][0], description=RESPONSE["201_CREATED"][1])
    @pet_ns.expect(pet_model)
    def post(self, **payload):
        new_pet = Pet(**api.payload)
        print("hit", new_pet)
        new_pet.insert()
        print("hit", new_pet)

        return api.payload, RESPONSE["201_CREATED"][0]


# Handles DELETE, PATCH requests (requiring pet id)
@pet_ns.route("/<int:pet_id>")
class PetsID(Resource):

    # DELETE "/pets/<int:pet_id>" endpoint
    @pet_ns.marshal_with(pet_model, code=RESPONSE["204_NO_CONTENT"][0], description=RESPONSE["204_NO_CONTENT"][1])
    @pet_ns.expect(pet_model)
    def delete(self, pet_id, **payload):
        # Try retrieving and updating pet record
        err_code = ""
        err_desc = ""

        try:
            # Retrieve existing pet record to delete
            existing_pet = Pet.query.filter(Pet.id == pet_id).one_or_none()
            # Retrieve pad record connected to pet record to delete TODO
            # existing_pet_pad = Pad.query.filter(Pad.id == pet_id).one_or_none()

            # If pet record doesn't exist, abort
            if existing_pet is None:
                err_code = RESPONSE["404_RESOURCE_NOT_FOUND"][0]
                err_desc = RESPONSE["404_RESOURCE_NOT_FOUND"][1]

            else:
                # TODO - delete related records when the pet is deleted
                existing_pet.delete()

        # Exception handling
        except Exception as ex:
            logger.exception(ex, exc_info=True)

            # Handle only exceptions which contain code, title, and description segments differently
            if "'" not in str(ex):
                ex_data = extract_exception(ex)
                err_code = ex_data["code"]
                err_desc = ex_data["title"]
            else:
                raise ex

            db.session.rollback()

        if err_code:
            abort(int(err_code), err_desc)
        else:
            return "", RESPONSE["204_NO_CONTENT"][0]

    # PATCH "/pets/<int:pet_id>" endpoint
    @pet_ns.marshal_with(pet_model, code=RESPONSE["204_NO_CONTENT"][0], description=RESPONSE["204_NO_CONTENT"][1])
    @pet_ns.expect(pet_model)
    def patch(self, pet_id, **payload):
        # Try retrieving and updating pet record
        err_code = ""
        err_desc = ""

        try:
            # Retrieve existing pet record to update
            existing_pet = Pet.query.filter(Pet.id == pet_id).one_or_none()

            # If pet record doesn't exist, abort
            if existing_pet is None:
                err_code = RESPONSE["404_RESOURCE_NOT_FOUND"][0]
                err_desc = RESPONSE["404_RESOURCE_NOT_FOUND"][1]

            # Pet record does exist, so update
            else:
                existing_pet.update(api.payload)

        # Error handling
        except (ValueError, IntegrityError) as err:
            logger.error(err, exc_info=True)
            err_code = RESPONSE["422_UNPROCESSABLE_ENTITY"][0]
            err_desc = RESPONSE["422_UNPROCESSABLE_ENTITY"][1]
            db.session.rollback()

        # Exception handling
        except Exception as ex:
            logger.exception(ex, exc_info=True)

            # Handle only exceptions which contain code, title, and description segments differently
            if "'" not in str(ex):
                ex_data = extract_exception(ex)
                err_code = ex_data["code"]
                err_desc = ex_data["title"]
            else:
                raise ex

            db.session.rollback()

        if err_code:
            abort(int(err_code), err_desc)
        else:
            return "", RESPONSE["204_NO_CONTENT"][0]

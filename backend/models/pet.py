from backend.app import api
from flask_restx import fields

pet_model = api.model("pet_model", {
    "id": fields.String(readonly=True, description="Pet's auto-incremented UUID (PRIMARY KEY)"),
    "name": fields.String(description="Pet's name", required=True),
    "gender": fields.String(description="Pet's gender", required=True),
    "species": fields.String(description="Pet's species", required=True),
    "breed": fields.String(description="Pet's breed", required=True),
    "weight": fields.Float(description="Pet's weight", required=True),
    "height": fields.Float(description="Pet's height", required=True),
    "birthday": fields.DateTime(description="Pet's birthday", required=True),
    "favourite_toy": fields.String(description="Pet's favourite toy", required=True),
    "favourite_food": fields.String(description="Pet's favourite food", required=True),
    "personality_trait": fields.String(description="Pet's personality trait", required=True),
    "profile_image": fields.String(description="Pet's base64 encoded profile image", required=True),
    "profile_completed": fields.Boolean(description="Pet's profile is completed flag", required=True, default=False),
})

pet_list_model = api.model("pet_list_model", {
    "pets": fields.List(fields.Nested(pet_model), default=[]),
    "total_pets": fields.Integer(readonly=True, description="Pet count")
})

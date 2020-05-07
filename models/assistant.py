from flask_restx import fields

from app import api

assistant_model = api.model("assistant_model", {
    "id": fields.String(readonly=True, description="Pad auto-incremented UUID (PRIMARY KEY)"),
    "name": fields.String(description="Pad name", required=True),
})

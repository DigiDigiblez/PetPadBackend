from petpadbackend.app import api
from flask_restx import fields

assistant_model = api.model("assistant_model", {
    "id": fields.String(readonly=True, description="Pad auto-incremented UUID (PRIMARY KEY)"),
    "name": fields.String(description="Pad name", required=True),
})

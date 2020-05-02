from app import api
from flask_restx import fields

pad_model = api.model("pad_model", {
    "id": fields.String(readonly=True, description="Pad auto-incremented UUID (PRIMARY KEY)"),
    "name": fields.String(description="Pad name", required=True),
})

from backend.app import api
from flask_restx import fields

pad_note_model = api.model("pad_note_model", {
    "id": fields.String(readonly=True, description="Pad Note auto-incremented UUID (PRIMARY KEY)"),
    "creation_datetime": fields.DateTime(description="Pad Note creation date/time", required=True),
    "date_last_modified": fields.DateTime(description="Pad Note last modified date/time", required=True),
    "contents": fields.String(description="Pad Note contents", required=True),
    "mood": fields.String(description="Pad Note mood", required=True),
    "is_open": fields.Boolean(description="Pad Note open state", required=True, default=False),
})

pad_note_list_model = api.model("pad_note_list_model", {
    "pad_notes": fields.List(fields.Nested(pad_note_model), default=[]),
    "total_pad_notes": fields.Integer(readonly=True, description="Pad Note count")
})

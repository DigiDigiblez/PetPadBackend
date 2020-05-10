from backend.app import api
from flask_restx import fields

post_model = api.model("post_model", {
    "id": fields.String(readonly=True, description="Post auto-incremented UUID (PRIMARY KEY)"),
    "creation_datetime": fields.Integer(description="Post creation date/time UNIX epoch timestamp", required=True),
    "date_last_modified": fields.Integer(description="Post last modified date/time UNIX epoch timestamp", required=True),
    "content": fields.String(description="Post content", required=True),
    "mood": fields.String(description="Post mood", required=True),
    "is_open": fields.Boolean(description="Post open state", required=True, default=False),
})

post_list_model = api.model("post_list_model", {
    "posts": fields.List(fields.Nested(post_model), default=[]),
    "total_posts": fields.Integer(readonly=True, description="Post count")
})

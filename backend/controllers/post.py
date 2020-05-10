from flask_restx import Resource

from backend.app import api, logger, db
from backend.constants.constants import RESPONSE
from backend.database.post import Post
from backend.models.post import post_model, post_list_model

pet_ns = api.namespace("posts", description="Post endpoints")


# Handles GET, POST requests (requiring no post id)
@pet_ns.route("/")
class PetsNoID(Resource):

    # GET "/posts/" endpoint
    @pet_ns.marshal_list_with(post_list_model, code=RESPONSE["200_OK"][0], description=RESPONSE["200_OK"][1])
    @pet_ns.expect(post_model)
    def get(self):
        # Retrieve all posts from newest to oldest
        all_posts = Post.query.order_by(db.desc(Post.id)).all()

        response = {
            "posts": all_posts,
            "total_posts": len(all_posts),
        }

        return response, RESPONSE["200_OK"][0]

    # POST "/posts/" endpoint
    @pet_ns.marshal_with(post_model, code=RESPONSE["201_CREATED"][0], description=RESPONSE["201_CREATED"][1])
    @pet_ns.expect(post_model)
    def post(self, **payload):
        try:
            # Retrieve the parts of the post from the body
            mood = api.payload["mood"]
            content = api.payload["content"]

            # Build a new post object
            new_post = Post(
                mood=mood,
                content=content,
            )

            new_post.insert()

        # Exception handling
        except Exception as ex:
            logger.exception(ex, exc_info=True)

            # Handle only exceptions which contain code, title, and description segments differently
            db.session.rollback()
            raise ex

        return api.payload, RESPONSE["201_CREATED"][0]

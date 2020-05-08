"""empty message

Revision ID: f6ac8ce86f4d
Revises: 
Create Date: 2020-05-08 14:57:12.272641

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f6ac8ce86f4d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Pet',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('gender', sa.String(length=10), nullable=False),
    sa.Column('species', sa.String(length=50), nullable=False),
    sa.Column('breed', sa.String(length=80), nullable=False),
    sa.Column('weight', sa.Float(), nullable=False),
    sa.Column('height', sa.Float(), nullable=False),
    sa.Column('birthday', sa.DateTime(), nullable=False),
    sa.Column('favourite_toy', sa.String(length=100), nullable=False),
    sa.Column('favourite_food', sa.String(length=100), nullable=False),
    sa.Column('personality_trait', sa.String(length=50), nullable=False),
    sa.Column('social_google_plus_url', sa.String(length=500), nullable=True),
    sa.Column('social_facebook_url', sa.String(length=500), nullable=True),
    sa.Column('social_twitter_url', sa.String(length=500), nullable=True),
    sa.Column('social_instragram_url', sa.String(length=500), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Pet')
    # ### end Alembic commands ###

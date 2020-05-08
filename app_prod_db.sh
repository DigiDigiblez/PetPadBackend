export ENV=local

python migrations.py db init
python migrations.py db migrate
python migrations.py db upgrade

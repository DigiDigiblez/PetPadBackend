export ENV=local

flask db init
flask db migrate
flask db upgrade

sh ./app_run.sh
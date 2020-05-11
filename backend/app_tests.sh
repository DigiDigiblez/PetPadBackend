export ENV=test
export CLIENT_SECRET=
export CLIENT_ID=

coverage run backend/test_petpad.py
coverage report

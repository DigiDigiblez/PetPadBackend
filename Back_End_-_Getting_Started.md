# Pet Pad App

### Setup Back End
#### Introduction
As there's so much to cover, we are going to break this down into stages. The backend production API is hosted on Heroku, while testing is doing using a local PostgreSQL database. Authentication is handled using the identity service provider Auth0, actioned through the use of JWTs (bearer tokens) in auth headers.
In addition, testing is done both in Postman, and through the use of the UnitTest Python library.

#### Installation
Going to have to set up a virtual environment, e.g. virtualenv. Additionally, install the requirements.txt file using `pip install -r requirements.txt`.

#### Coding style & conventions
This project back end uses [pep 8 style](https://www.python.org/dev/peps/pep-0008/), to ensure the code is neat and error-free.

#### Production API
The production database is hosted on Heroku at `https://petpadbackend.herokuapp.com/`. This root endpoint for the API harnesses the power of `Swagger UI`, and acts as the documentation domain for the API and all it's endpoints.
There's numerous endpoints, which can be tested through Swagger. To test them more effectively, both a `Postman Collection Runner suite` and a `UnitTest suite` have been constructed, with `100% test completion`.

#### Postman Collection (testing PROD API)
Please find in the root directory of this repo a zip file containing a collection of http request cases, all of which have been authenticated with one of two bearer tokens. The collection is structured into two main folders; `Free User requests` and `Premium User requests`, each with their own permissions (see the next section).

#### Auth0 Permissions
This project has two types of actor; `Free User` and `Premium User`. They have the following permissions:
- Free User:
  - delete:pet
  - get:pet
  - get:pets
  - get:post
  - get:posts
  - patch:pet
  - post:pet
  - post:post
- Premium User:
  - ALL OF FREE USER PERMISSIONS +
  - delete:post
  - patch:post
  
Free User's bearer token (JWT) is the following:
```
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBsbmJKb29zelR2a0pTY2xwbzRBZSJ9.eyJpc3MiOiJodHRwczovL2ZzbmQyMDIwLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZWI3ZmEwMjZiNjliYzBjMTIwYTk4NWEiLCJhdWQiOiJwZXRwYWQiLCJpYXQiOjE1ODkyNTE0MTgsImV4cCI6MTU4OTMzNzgxNywiYXpwIjoiTGhrMnpGNU02Q3hMVDRZb25pVVNJSk10ZWxOUUhta1IiLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImRlbGV0ZTpwZXQiLCJnZXQ6cGV0IiwiZ2V0OnBldHMiLCJnZXQ6cG9zdCIsImdldDpwb3N0cyIsInBhdGNoOnBldCIsInBvc3Q6cGV0IiwicG9zdDpwb3N0Il19.ix4xUNP4e0QlFFdN9Khz1UNYIEONt7i3SKSKXbK-V716LMK7irujdjfwVpHOVVPfSjqHTGiT0PFA8b3aNUl1xAWSrFNa-ITuZxBto-n0iZDaLCMRGgFbXNAhPbHvesBeRuQfrjv_RjYd3XIx7ySeRW5m22WEIPIIjHUekJRi1wPgEhn33gAhYdx7bC6fL2eg6nT6nY2pztCcFDtqiKDA-fg7MLvC5U6-TV6pcHsAfr-301sf3ekWWAimrCIV6Qc5U1khnL77TAkT8GIPR9CFR_JJIx9_E3mT2kGTdzSI2pZmRLqcbYW0jZAwOTiIKnxlJIMmieiLh8jlu4DmOM-cQA
```
Premium User's bearer token (JWT) is the following:
```
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBsbmJKb29zelR2a0pTY2xwbzRBZSJ9.eyJpc3MiOiJodHRwczovL2ZzbmQyMDIwLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZWI3ZmExYzZiNjliYzBjMTIwYTk4OTkiLCJhdWQiOiJwZXRwYWQiLCJpYXQiOjE1ODkyNTE1NjYsImV4cCI6MTU4OTMzNzk2NSwiYXpwIjoiTGhrMnpGNU02Q3hMVDRZb25pVVNJSk10ZWxOUUhta1IiLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbImRlbGV0ZTpwZXQiLCJkZWxldGU6cG9zdCIsImdldDpwZXQiLCJnZXQ6cGV0cyIsImdldDpwb3N0IiwiZ2V0OnBvc3RzIiwicGF0Y2g6cGV0IiwicGF0Y2g6cG9zdCIsInBvc3Q6cGV0IiwicG9zdDpwb3N0Il19.B8uOXArncGSJng7He9Rh5vGM0ds6T42i8_oHiKvoGAxirnyvkNWyRoSttesCas3CTS4A_5tAX9XhZcau3iIqcHQRjq01iu2a6ZkZ_k-7ivz0pNma5odQfayvDFIwPGAcD9Jh3oQ5St9ePDpXt4kbBRSzCKmuqupe4V1IfrNvj2vF4hG8NBhtRqe5aDaEGbY61MbELIn8uhrguVd35i3S8xOaEAT9C4VG8O4WDykZ9Fs4PKeLqQKz5HE-_UDyZDxql7Q6-N4K6Fb_YkiU-rWkoM8swWmVdjdOx0O1QFpx8Umzx5YIUjCub07hGYvtwY8aaVINk95i9cQZJ-Kim6EuhA
```
These can also be found included in all respective requests in the Postman Collection provided with this repo. Moreover, these tokens can of course be read using `JWT.io's debugger`.

#### User Accounts
The Free User's Auth0 account details are `free.user@petpad.com / Udacity2020`, while the Premium User's credentials are `premium.user@petpad.com / Udacity2020`. You can both authorise them and log them out using the following endpoints:
- Authorise: `https://fsnd2020.auth0.com/authorize?audience=petpad&response_type=token&client_id=Lhk2zF5M6CxLT4YoniUSIJMtelNQHmkR&redirect_uri=http://localhost:3000/`
- Logout: `https://fsnd2020.auth0.com/logout?audience=petpad&response_type=token&client_id=Lhk2zF5M6CxLT4YoniUSIJMtelNQHmkR&redirect_uri=http://localhost:3000/`

#### Unit Tests (testing PROD API)
In addition to Postman tests, `30 unit tests` have also been created and fully pass. They test all endpoints, both authenticated and unauthenticated for both actors. The database used is a local test one, separated from the Heroku production database to prevent conflicts.
Each time you run the tests the best course of action would be to load `psql` and type `CREATE DATABASE "petpadtest";` when first beginning the project, and both `DROP DATABASE "petpadtest";` and `CREATE DATABASE "petpadtest";` before doing future test runs to completely reset the test environment. To run tests, run the `test_petpad.py` file provided.


Additionally, since we're testing secure https endpoints locally, we will want to leverage local `SSL Certificates`, see `https://stackoverflow.com/questions/50236117/scraping-ssl-certificate-verify-failed-error-for-http-en-wikipedia-org`. For this, we will want to go to the directory of Python, and run the `Install Certificates.command` and `Update Shell Profile.command` files in that directory before running our unit test suite. On Mac this can be found in `Applications / Python 3.x / <files>`.

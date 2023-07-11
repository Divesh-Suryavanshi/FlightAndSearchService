# Flight And Search Service

## Setup

- Clone the project on your local machine
- Execute `npm install` in root directory of the project
- Create `.env` file in the root directory of the project and add the following:
  ```
  PORT=3000
  ```
- Now create another file name `config.json` inside `src/config` folder and add the following content to it:
  ```json
  {
    "development": {
      "username": <YOUR_DB_USER_NAME>,
      "password": <YOUR_DB_PASSWORD>,
      "database": "Flights_Search_DB_Dev",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
  ```

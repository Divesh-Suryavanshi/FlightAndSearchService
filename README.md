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

- After completing the above steps execute the following command inside `src/folder` of the project

  ```
  npx sequelize db:create
  npx sequelize db:migrate
  ```

## DB Design

- Airplane Table
- Flight
- Airport
- City

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one airport

## Tables

### City Table

| id  | name | created_at | updated_at |
| --- | ---- | ---------- | ---------- |

### Airport Table

| id  | name | address | city_id | created_at | updated_at |
| --- | ---- | ------- | ------- | ---------- | ---------- |

    Relationship -> City has many airports and Airport belongs to a city (one to many)

## API Blueprint

- `/api/v1`
  - `POST /city` -> create a city
- `/`

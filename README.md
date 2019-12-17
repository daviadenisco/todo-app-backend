# todo-app-backend
This repo is the backend for [todo-app-frontend](https://github.com/daviadenisco/todo-app-frontend/blob/master/README.md).

It requires Node >= 8 and runs on the [Express.js](https://expressjs.com/) framework.

## Setup
After cloning this repo, you'll have to install dependencies:

```
npm install
```

## Database Migration
This app uses PostgreSQL. Make sure you have it installed!

Then, enter the PostgreSQL command line by running the following command:
```
psql
```
Once you're in the `psql` command line, run the following commands to create a new database, a new table within that database, and a new user with permissions to view and alter that database.
```javascript
create database api;
\c api;

CREATE TABLE todos(
    id serial PRIMARY KEY,
    title VARCHAR (100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    date date NOT NULL,
    complete boolean DEFAULT false
);

create user ralphie with encrypted password 'Ralphie1';
ALTER USER ralphie WITH SUPERUSER;
```

Then to start the app, enter:

```
npm start
```

This will run the backend in development mode, running the backend at <http://localhost:3001>.

---

## DB Schema
### table: *todos*

| Column        | Type                    | Colation  | Nullable  | Default                           |
| ------------- |:-----------------------:| ---------:| ---------:| ----------------------------------:
| id            | integer                 |           | not null  | nextval('todos_id_seq'::regclass) |
| title         | character varying(100)  |           |           |                                   |
| description   | character varying(1000) |           |           |                                   |
| date          | date                    |           | not null  | CURRENT_DATE                      |
| complete      | boolean                 |           |           | false                             |

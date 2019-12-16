# todo-app-backend
This repo is the backend for [todo-app-frontend](https://github.com/daviadenisco/todo-app-frontend/blob/master/README.md).

It requires Node >= 8 and runs on the [Express.js](https://expressjs.com/) framework.

## Setup
After cloning this repo, you'll have to install dependencies:

```
npm install
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

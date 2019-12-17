const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;
const db = require('./queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// put something on the '/' and check it's working
app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' });
})
// get all todos from '/todos'
app.get('/todos', db.getTodos);
// get todos by id
app.get('/todos/:id', db.getTodoById);
// add new todo to '/todos'
app.post('/todos', db.createTodo);
// for use later when implementing edit
app.put('/todos/:id', db.updateTodo);
// delete a todo by its id
app.delete('/todos/:id', db.deleteTodo);

// tells the app which port to listen on
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
})


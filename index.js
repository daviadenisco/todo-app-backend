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
app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' });
})
app.get('/todos', db.getTodos);
app.get('/todos/:id', db.getTodoById);
app.post('/todos', db.createTodo);
app.put('/todos/:id', db.updateTodo);
app.delete('/todos/:id', db.deleteTodo);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
})


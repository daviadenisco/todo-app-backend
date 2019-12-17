// Trying out pooling after reading about it,
// it sounds like pooling is used in production apps,
// wanted to get a feel for how it works.
// but, in prod, these credentials would be in a .env file
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'ralphie',
    host: 'localhost',
    database: 'api',
    password: 'Ralphie1',
    port: 5432,
});

// get todos with SQL 
const getTodos = (req, res) => {
    pool.query('SELECT * FROM todos ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows)
    })
}

// get todos by id using a placeholder for the id
const getTodoById = (req, res) => {
    const id = parseInt(req.params.id)  
    pool.query('SELECT * FROM todos WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

// create a todo with all fields required for db
const createTodo = (req, res) => {
    const { title, description, date, complete } = req.body
  
    pool.query('INSERT INTO todos (title, description, date, complete) VALUES ($1, $2, $3, $4)', [title, description, date, complete], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`${results.rowCount} todo added`);
    })
}

// for use later when implementing edit
const updateTodo = (req, res) => {
    const id = parseInt(req.params.id)
    const { title, description, date, complete } = req.body
  
    pool.query(
      'UPDATE todos SET title = $1, description = $2, complete = $3, date = $4 WHERE id = $5',
      [title, description, complete, date, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`Todo modified with ID: ${id}`)
      }
    )
  }

// deletes a todo based on the id
const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id)
  
  pool.query('DELETE FROM todos WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Todo deleted with ID: ${id}`)
  })
}

  module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  }
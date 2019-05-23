const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

// ToDo model - help make queries
const todo = require('../../models/todo')

// Addresses for gets, puts, posts, deletes
router.get('/', async(req, res) => { // represents api/todo because we are there
  await todo.find()
    .then(todo => res.json(todo))
})

router.get('/:id', async(req, res) => {
  await todo
    .findById(req.params.id)
    .then(todo => res.json(todo))
})

router.post('/', (req, res) => {
  const newTodo = new todo({
    responsible: req.body.responsible,
    task: req.body.task,
    dueDate: req.body.dueDate,
    done: req.body.done,
  });
  newTodo.save().then(todo => res.json(todo)); // save to database, give JSON back
})

router.put('/:id', (req, res) => {
  console.log(req.body)
  todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  )
});

router.delete('/:id', (req, res) => {
  todo
    .findById(req.params.id)
    .then(todo => todo.remove()
    .then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});

module.exports = router
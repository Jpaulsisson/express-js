const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('Generic User Page')
})

userRouter.post('/', (req, res) => {
  res.send('Create User')
})

userRouter.get('/new', (req, res) => {
  res.send('New User Page')
})

userRouter
.route('/:id')
.get((req, res) => {
  res.send(`Get User Page where the ID is ${req.params.id}`)
})
.put((req, res) => {
  res.send(`Update User Page where the ID is ${req.params.id}`)
})
.delete((req, res) => {
  res.send(`Delete User Page where the ID is ${req.params.id}`)
})

userRouter.param('id', (req, res, next, id) => {
  console.log(id);
  next();
})

module.exports = userRouter;
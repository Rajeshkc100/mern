const express = require('express');

const UserController = require('../controller/userController')();
const TodoController = require('../controller/todoController')();

const router = express.Router();

router.get('/getAll', TodoController.getAll);
router.get('/user', UserController.getUser);

router.post('/create', TodoController.create);
router.post('/createUser', UserController.createUser);

router.put('/updateTodo', TodoController.updateTodo);
router.put('/updateUser', UserController.updateUser);

router.delete('/deleteTodo', TodoController.deleteTodo);
router.delete('/deleteUser', UserController.deleteUser);

module.exports = router;
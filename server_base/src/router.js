const express = require('express');

const router = express.Router();

const tasksController = require ('./controllers/userController')

router.get('/user', taskController.getAll);

module.exports = router;  
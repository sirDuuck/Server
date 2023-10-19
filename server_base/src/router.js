const express = require('express');

const router = express.Router();

const tasksController = require ('./controllers/tasksController')

router.get('/user', taskController.getAll);

module.exports = router;  
const express = require('express');

const router = require ('./router')

const app = express ();

app.use(router);

app.get('/user', (resquest, response) => response.status(200).send ('hello world'));

module.exports = app;
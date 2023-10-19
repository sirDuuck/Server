const express = require('express');

const router = require ('./router')

const app = express ();

app.get('/', (resquest, response) => response.status(200).send ('hello world'));

module.exports = app;

app.use(router);
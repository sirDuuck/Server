import express from "express";

const app = express();

const dotenv = require('dotenv');
dotenv.config();
process.env.PORT (8070)

app.get('/user', (request, response) => response.status (200).send('Hello Wold'));

const app = require('./app');

app.listen(8070, () => console.log('server running or port 8070'));
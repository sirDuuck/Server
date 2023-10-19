import express from 'express';

const rota = express.Router();

rota.get('/user', (resquest, response) => response.status(200).send ('hello world'));

export default rota;
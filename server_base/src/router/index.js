import express from 'express';

import { getFunction, postFunction, putFunction, deleteFuncion} from './server_base/src/controller/client';

import { getFunction, postFunction, putFunction, deleteFuncion} from './server_base/src/controller/certificado';

const rota = express.Router();

rota.get('/user', (resquest, response) => response.status(200).send ('hello world'));

rota.delete('./user/:id', (request, response) => {
    const id = request.params.id; 

    response.status(204).send();
});

rota.get('/user/:id', (request, response) => {
    const id = request.params.id;

    response.status(200).json({id,});
});

export default rota;
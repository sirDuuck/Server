import express from 'express';
import { getFunction, postFunction, putFunction} from './server_base/src/controller/client';
import { getFunction, postFunction, putFunction} from './server_base/src/controller/certificado';

const rota = express.Router();

rota.get('/user', (resquest, response) => response.status(200).send ('hello world'));

export default rota;
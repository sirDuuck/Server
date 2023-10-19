import express from "express";

const app = express();

app.get('/', (request, response) => response.status (200).send('Hello Wold'));

app.listen(8070, () => console.log('server running or port 8070'));
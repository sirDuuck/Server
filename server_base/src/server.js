import express from "express";

import rota from "./router/index.js";

const app = express();

const port = process.env.PORT 

app.use(rota)

app.listen(port, () => console.log(`server running or port ${port}`));
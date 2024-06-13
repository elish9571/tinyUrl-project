import express from 'express'
import bodyParser from "body-parser";
import cors from "cors";
import UsersRouter from './Routers/UsersRouter.js';
import LinksRouter from './Routers/LinksRouter.js';
import RedirectRouter from './Routers/RedirectRouter.js';
import connectDB from './database.js';
connectDB();
const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json());
app.use('/users', UsersRouter);
app.use('/links', LinksRouter);
app.use('/', RedirectRouter); 

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
});

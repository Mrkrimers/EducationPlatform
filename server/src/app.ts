import express, { Request, Responce, NextFunction } from 'express'
import course from './controller/course.controller';
import user from './controller/user.controller';
import api from './controller/api.controller';
import cors from 'cors';

import bodyParser from 'body-parser';

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(`/course`, course);
app.use(`/user`, user);
app.use(`/api`, api);

app.use((error, req: Request, res: Responce, next: NextFunction) => res.send(error.message))
export default app;
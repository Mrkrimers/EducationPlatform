import express, { Request, Responce, NextFunction } from 'express'
import course from './controller/course.controller';
import user from './controller/user.controller';
import api from './controller/api.controller';
import lesson from './controller/lesson.controller'
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(`/course`, course);
app.use(`/user`, user);
app.use(`/api`, api);
app.use(`/lesson`, lesson);

app.use((error, req: Request, res: Responce, next: NextFunction) => res.send(error.message))
export default app;
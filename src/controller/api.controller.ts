import express, { Request, Responce } from 'express';
import { createUser, authorizationUser } from '../service/api.service';


const route = express.Router();

route.post(`/register`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body
        const data = await createUser(name, surname, email, pwd);

        res.status(200).send(data);
    } catch (err: any) {
        res.status(404).send(err.message)
    }
})

route.post(`/auth`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { email, pwd } = req.body;
        const data = await authorizationUser(email, pwd)

        res.status(200).send(data)
    } catch (err: any) {
        res.status(404).send(err.message)
    }
})


export default route;
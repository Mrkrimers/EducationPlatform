import express, { Responce, Request } from 'express';
import { getAllUser, getUserById, updateUser, deleteUser } from '../service/user.service'
import { iUser } from '../interfaces/index'

const route = express.Router();

route.get(`/`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const data: iUser[] = await getAllUser()

        res.status(200).send(data);
    } catch (err: any) {
        res.status(404).send(err.message);
    }
})

route.get(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const data: iUser[] = await getUserById(id)

        res.status(200).send(data)
    } catch (err: any) {
        res.status(404).send(err.message);
    }
})

route.put(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data: iUser[] = await updateUser(id, name, surname, email, pwd);

        res.status(200).send(data)
    } catch (err: any) {
        res.status(404).send(err.message);
    }
})

route.delete(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const data: iUser[] = await deleteUser(id)

        res.status(200).send(data)
    } catch (err: any) {
        res.status(404).send(err.message)
    }
})


export default route;
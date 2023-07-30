import express, { Responce, Request } from 'express';
import { getAllUser, getUserById, updateUser, deleteUser } from '../service/user.service'
import { iUser } from '../interfaces/index'
import buildResponse from '../helper/buildResponse';

const route = express.Router();

route.get(`/`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const data: iUser[] = await getAllUser()

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.get(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const data: iUser[] = await getUserById(id)

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.put(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data: iUser[] = await updateUser(id, name, surname, email, pwd);

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.delete(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const data: iUser[] = await deleteUser(id)

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})


export default route;
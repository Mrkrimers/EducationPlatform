import express, { Request, Responce } from 'express';
import { createUser, authorizationUser, deleteById } from '../service/api.service';
import buildResponse from '../helper/buildResponse'

const route = express.Router();

route.post(`/register`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body
        const data = await createUser(name, surname, email, pwd);

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.post(`/auth`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { email, pwd } = req.body;
        const data = await authorizationUser(email, pwd)

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.delete(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await deleteById(id);

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

export default route;
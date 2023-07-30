import express, { Request, Responce } from 'express';
import { getUsers, createCourse, getUserById, putUserUpdate, deleteUserById } from '../service/course.service';
import { iCourse } from '../interfaces';
import buildResponse from '../helper/buildResponse';

const route = express.Router();

route.get(`/`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const data: iCourse[] = await getUsers();

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.get(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const data: iCourse[] = await getUserById(id)

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.post(`/`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { course } = req.body;
        const data: iCourse[] = await createCourse(course);

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.put(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const { course } = req.body;
        const data = await putUserUpdate(id, course);

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

route.delete(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await deleteUserById(id)

        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})

export default route;
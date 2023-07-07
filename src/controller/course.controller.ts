import express, { Request, Responce } from 'express';
import { getUsers, createCourse, getUserById, putUserUpdate, deleteUserById } from '../service/course.service';
import { iCourse } from '../interfaces';

const route = express.Router();

route.get(`/`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const data: iCourse[] = await getUsers();

        res.status(200).send(data);
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.get(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const data: iCourse[] = await getUserById(id)

        res.status(200).send(data);
    } catch (error: any) {
        res.status(404).send(error.message);
    }
})

route.post(`/`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { course } = req.body;
        const data: iCourse[] = await createCourse(course);

        res.status(200).send(data)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.put(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const { course } = req.body;
        const data = await putUserUpdate(id, course);

        res.status(200).send(data)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.delete(`/:id`, async (req: Request, res: Responce): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await deleteUserById(id)

        res.status(200).send(data);
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

export default route;
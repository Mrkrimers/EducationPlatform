import { getUsersDB, createCourseDB, getUserByIdDB, putUserUpdateDB, deleteUserByIdDB } from '../repository/course.repository'
import { iCourse } from '../interfaces/index'

async function getUsers(): Promise<iCourse[]> {
    const data = await getUsersDB();
    if (!data.length) throw new Error(`ERROR data`)

    return data;
}

async function getUserById(id: number): Promise<iCourse[]> {
    const data = await getUserByIdDB(id);
    if (!data.length) throw new Error(`This ID not found`)

    return data;
}

async function createCourse(course: string, description: string): Promise<iCourse[]> {
    const data = await createCourseDB(course, description);
    if (!data.length) throw new Error(`NOT created`)

    return data;
}

async function putUserUpdate(id: number, course: string, description: string): Promise<iCourse[]> {
    const data = await putUserUpdateDB(id, course, description);
    if (!data.length) throw new Error(`NOT updated`);

    return data;
}

async function deleteUserById(id: number): Promise<iCourse[]> {
    const data = await deleteUserByIdDB(id);
    if (!data.length) throw new Error(`can't deleted`);

    return data;
}


export { getUsers, createCourse, getUserById, putUserUpdate, deleteUserById }
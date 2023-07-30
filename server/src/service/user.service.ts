import { getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../repository/user.repository';
import { iUser } from '../interfaces/index'

async function getAllUser(): Promise<iUser[]> {
    const data: iUser[] = await getAllUserDB();
    if (!data.length) throw new Error(`DB is empty`);

    return data;
}

async function getUserById(id: number): Promise<iUser[]> {
    const data: iUser[] = await getUserByIdDB(id);
    if (!data.length) throw new Error(`ID not found`);

    return data;
}

async function updateUser(id: number, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const data: iUser[] = await updateUserDB(id, name, surname, email, pwd);
    if (!data.length) throw new Error(`can't update`);

    return data;
}

async function deleteUser(id: number): Promise<iUser[]> {
    const data: iUser[] = await deleteUserDB(id);
    if (!data.length) throw new Error(`can not DELETE`)

    return data;
}


export { getAllUser, getUserById, updateUser, deleteUser }
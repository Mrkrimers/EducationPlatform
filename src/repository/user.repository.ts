import pool from '../bd'
import { iUser } from '../interfaces/index'

async function getAllUserDB(): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM users`

    const data: iUser[] = (await client.query(sql)).rows;

    return data;
}

async function getUserByIdDB(id: number): Promise<iUser[]> {
    const client = await pool.connect();

    const sql = `SELECT * FROM users
    WHERE id = $1`

    // console.log(client.query());

    const data: iUser[] = (await client.query(sql, [id])).rows;

    return data;
}

async function updateUserDB(id: number, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);

        const sql = `UPDATE users 
        SET name = $2, surname = $3, email = $4, pwd = $5
        WHERE id = $1 
        RETURNING *`
        const data: iUser[] = (await client.query(sql, [id, name, surname, email, pwd])).rows

        await client.query(`COMMIT`);

        return data;
    } catch (err: any) {
        await client.query(`ROLLBACK`);
        console.log(`updateUserDB: ${err.message}`);
        return []
    }
}

async function deleteUserDB(id: number): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);
        const sql = `DELETE FROM users WHERE id = $1 RETURNING *`

        const data: iUser[] = (await client.query(sql, [id])).rows
        await client.query(`COMMIT`);

        return data;
    } catch (err: any) {
        await client.query(`ROLLBACK`)
        console.log(`deleteUserDB: ${err.message}`);
        return []
    }
}

// async function patchedUserDB(id: number) {
//     const client = await pool.connect();
//     try {
//         await client.query(`BEGIN`);

//         const sqlOne = `SELECT * FROM users WHERE id = $1`
//         const dataClient = (await client.query(sqlOne, [id])).rows;

//         const sqlTwo = `UPDATE users 
//         SET dataClient = $1`

//         await client.query(`COMMIT`);
//     } catch (err: any) {
//         await client.query(`ROLLBACK`);

//     }

// }

export { getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB }
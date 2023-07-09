import pool from '../bd';
import { iUser } from '../interfaces/index'

async function createUserDB<T>(name: T, surname: T, email: T, pwd: T): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`)
        const sql = `INSERT INTO users (name,surname,email,pwd)
        VALUES ($1,$2,$3,$4)
        RETURNING *`

        const data: iUser[] = (await client.query(sql, [name, surname, email, pwd])).rows;

        await client.query(`COMMIT`);

        return data;
    } catch (error: any) {
        await client.query(`ROLLBACK`)
        console.log(`createUserDB : ${error.message}`);
        return [];
    }
}

async function getEmailDB(email: string): Promise<iUser[]> {
    const client = await pool.connect();

    const sql = `SELECT * FROM users WHERE email = $1`
    const data = (await client.query(sql, [email])).rows

    return data;
}

export { createUserDB, getEmailDB };
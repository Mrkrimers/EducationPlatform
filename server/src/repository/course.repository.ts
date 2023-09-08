import pool from '../bd';
import { iCourse } from '../interfaces/index'

async function getUsersDB(): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM courses`

    const data = (await client.query(sql)).rows;
    await client.release()
    return data;
}

async function getUserByIdDB(id: number): Promise<iCourse[]> {
    const client = await pool.connect();

    const sql = `SELECT * FROM courses
    WHERE id = $1`

    const data = (await client.query(sql, [id])).rows

    await client.release()
    return data;
}

async function createCourseDB(course: string, description: string): Promise<iCourse[]> {
    const client = await pool.connect();

    const sql = `INSERT INTO courses (course, description)
    VALUES ($1, $2) 
    RETURNING *`

    const data = (await client.query(sql, [course, description])).rows

    await client.release()
    return data;
}

async function putUserUpdateDB(id: number, course: string, description: string): Promise<iCourse[]> {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`);
        const sql = `UPDATE courses SET course = $2 description = $3
        WHERE id = $1
        RETURNING *`

        const data = (await client.query(sql, [id, course, description])).rows
        await client.query(`COMMIT`);

        await client.release()
        return data;
    } catch (error: any) {
        await client.query(`ROLLBACK`);
        console.log(`putUserUpdateDB: ${error.message}`);

        return []
    }
}

async function deleteUserByIdDB(id: number): Promise<iCourse[]> {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`)
        const sql = `DELETE FROM courses 
        WHERE id = $1 
        RETURNING *`

        const data = (await client.query(sql, [id])).rows;

        await client.release()
        await client.query(`COMMIT`)
        return data;
    } catch (error: any) {
        await client.query(`ROLLBACK`)
        console.log(`deleteUserByIdDB: ${error.message}`);
        return []
    }
}



export { getUsersDB, createCourseDB, getUserByIdDB, putUserUpdateDB, deleteUserByIdDB }
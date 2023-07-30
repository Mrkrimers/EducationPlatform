import { iCourse } from '../../../interfaces'
import { getUsersDB, getUserByIdDB, createCourseDB, putUserUpdateDB, deleteUserByIdDB } from '../../../repository/course.repository'

// jest.mock('pg', () => { Pool: jest.fn(() => { connect: jest.fn(() => { query: jest.fn() }) }) })

const mClient = {
    query: jest.fn()
}

jest.mock(`pg`, () => {
    const pool = {
        connect: jest.fn(() => mClient),
    }
    return { Pool: jest.fn(() => pool) }
})

describe(`getUsersDB function:`, () => {
    test(``, async () => {
        const arr: iCourse[] = [
            { id: 1, cousre: `test1` },
            { id: 2, cousre: `test2` },
            { id: 3, cousre: `test3` }
        ]

        mClient.query.mockResolvedValue({
            rows: arr
        })

        const res = await getUsersDB();
        expect(res).toEqual(arr);
        expect(res).toHaveLength(3);
    })
})

describe(`getUserByIdDB function:`, () => {
    test(`seccess`, async () => {
        const arr: iCourse[] = [{ id: 1, cousre: `test` }];
        mClient.query.mockResolvedValue({ rows: arr });

        const res = await getUserByIdDB(1);
        expect(res).toEqual(arr)
    })
})

describe(`createCourseDB function:`, () => {
    test(`seccess`, async () => {
        const arr: iCourse[] = [{
            id: 1,
            cousre: `test`
        }]
        mClient.query.mockResolvedValue({ rows: arr })

        const res = await createCourseDB(`test`);
        expect(res).toEqual(arr);
    })
})

describe(`putUserUpdateDB function:`, () => {
    test(`seccess`, async () => {
        const arr: iCourse[] = [{
            id: 1,
            cousre: `test`
        }]
        mClient.query.mockResolvedValue({ rows: arr });

        const res = await putUserUpdateDB(1, `test`);
        expect(res).toEqual(arr);
        expect(res).toHaveLength(1);
    })
})

describe(`deleteUserByIdDB function:`, () => {
    test(`seccess`, async () => {
        const arr: iCourse[] = [{ id: 1, cousre: `test` }];
        mClient.query.mockResolvedValue({ rows: arr });

        const res = await deleteUserByIdDB(1);
        expect(res).toEqual(arr);
        expect(res).toHaveLength(1);
    })
})
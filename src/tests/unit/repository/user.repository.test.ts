import { iUser } from '../../../interfaces'
import { getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../../../repository/user.repository'
// jest.mock('pg', () => {
//     Pool: jest.fn(() => {
//         connect: jest.fn()
//     })
// })
const mQuery = {
    query: jest.fn()
}

jest.mock('pg', () => {
    const poolMock = {
        connect: jest.fn(() => mQuery)
    }

    return { Pool: jest.fn(() => poolMock) }
})

describe(`getAllUserDB function:`, () => {
    test(`seccess`, async () => {
        const arr: iUser[] = [{
            id: 1,
            name: `test`,
            surname: `Stest`,
            email: `test@test.com`,
            pwd: `testtest`
        }, {
            id: 2,
            name: `test2`,
            surname: `Stest2`,
            email: `test2@test2.com`,
            pwd: `test2test2`
        }]

        mQuery.query.mockResolvedValue({ rows: arr });

        const res = await getAllUserDB();
        expect(res).toEqual(arr);
        expect(res).toContainEqual(arr[0]);
    })

    test(`error`, async () => {
        mQuery.query.mockResolvedValue({ rows: [] });

        const res = await getAllUserDB();
        expect(res).toEqual([]);
        expect(res).toHaveLength(0)
    })
})

describe(`getUserByIdDB function:`, () => {
    test(`seccess`, async () => {
        const arr: iUser[] = [{
            id: 1,
            name: `test`,
            surname: `Stest`,
            email: `test@test.com`,
            pwd: `testtest`
        }]

        mQuery.query.mockResolvedValue({ rows: arr });

        const res = await getUserByIdDB(1);
        expect(res).toEqual(arr);
        expect(res).toHaveLength(1);
    });

    test(`error`, async () => {
        mQuery.query.mockResolvedValue({ rows: [] });

        const res = await getUserByIdDB(1);
        expect(res).toEqual([]);
        expect(res).toHaveLength(0);
    })
})

describe(`updateUserDB function:`, () => {
    test(`seccess`, async () => {
        const arr: iUser[] = [{
            id: 1,
            name: `test`,
            surname: `Stest`,
            email: `test@test.com`,
            pwd: `testtest`
        }]

        mQuery.query.mockResolvedValue({ rows: arr });

        const res = await updateUserDB(1, `test`, `Stest`, `test@test.com`, `testtest`)
        expect(res).toEqual(arr);
        expect(res).toHaveLength(1);
    });

    test(`error`, async () => {
        mQuery.query.mockResolvedValue({ rows: [] });

        const res = await updateUserDB(1, `test`, `Stest`, `test@test.com`, `testtest`)
        expect(res).toEqual([]);
    })
})

describe(`deleteUserDB function:`, () => {
    test(`seccess`, async () => {
        const arr: iUser[] = [{
            id: 1,
            name: `test`,
            surname: `Stest`,
            email: `test@test.com`,
            pwd: `testtest`
        }]

        mQuery.query.mockResolvedValue({ rows: arr });

        const res = await deleteUserDB(1);
        expect(res).toEqual(arr);
        expect(res).toContain(arr[0])
        expect(res).toHaveLength(1);
    })

    test(`error`, async () => {
        mQuery.query.mockResolvedValue({ rows: [] });

        const res = await deleteUserDB(1);
        expect(res).toEqual([]);
        expect(res).toHaveLength(0);
    })
})
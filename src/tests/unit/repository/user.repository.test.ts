import { iUser } from '../../../interfaces'
import { getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../../../repository/user.repository'
import pool from '../../../bd'

const mQuery = {
    query: jest.fn()
}

jest.mock('pg', () => {
    const mPool = {
        connect: jest.fn(() => mQuery)
    }

    return { Pool: jest.fn(() => mPool) }
})

describe(`getAllUserDB function:`, () => {
    test(`seccess`, async () => {
        const arr: iUser[] = [{
            id: 1,
            name: 'test',
            surname: 'stest',
            email: 'test@test.com',
            pwd: 'testtest'
        }, {
            id: 2,
            name: 'test2',
            surname: 'stest2',
            email: 'test2@test2.com',
            pwd: 'test2test2'
        }];

        mQuery.query.mockResolvedValue({
            rows: arr
        });

        const res = await getAllUserDB();
        expect(res).toEqual(arr);
        expect(res).toHaveLength(2);
        expect(res).toContainEqual(arr[1]);
    })
})

describe(`getUserByIdDB function:`, () => {
    test(``, async () => {
        const arr = [{
            id: 1,
            name: 'test',
            surname: 'Stest',
            email: 'test@gmail.com',
            pwd: 'test'
        }]

        const mockQuery = {
            query: jest.fn()
        }
        mockQuery.query.mockResolvedValue({ rows: arr })

        const mainMock = jest.spyOn(pool, 'connect');
        mainMock.mockResolvedValue(mockQuery);

        const res = await getUserByIdDB(1);

        expect(mainMock).toHaveBeenCalled();
        // console.log(res);

        expect(res).toEqual(arr);
    })
})
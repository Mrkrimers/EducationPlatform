import { iUser } from '../../../interfaces';
import { createUserDB, getEmailDB } from '../../../repository/api.repository';

const mQuery = {
    query: jest.fn()
}

jest.mock(`pg`, () => {
    const poolMock = {
        connect: jest.fn(() => mQuery)
    }

    return { Pool: jest.fn(() => poolMock) }
})

describe(`createUserDB function:`, () => {
    test(`seccess`, async () => {
        const arr: iUser[] = [{
            id: 1,
            name: `test`,
            surname: `Stest`,
            email: `test@test.com`,
            pwd: `testtest`
        }]

        mQuery.query.mockResolvedValue({ rows: arr });

        const res = await createUserDB(`test`, `Stest`, `test@test.com`, `testtest`)
        expect(res).toEqual(arr);
        expect(res).toHaveLength(1);
    })

    test(`error`, async () => {
        mQuery.query.mockResolvedValue({ rows: [] });

        const res = await createUserDB(`test`, `Stest`, `test@test.com`, `testtest`)
        expect(res).toEqual([]);
        expect(res).toHaveLength(0);
    })
})

describe(`getEmailDB function:`, () => {
    test(`seccess`, async () => {
        const arr: iUser[] = [{
            id: 1,
            name: `test`,
            surname: `Stest`,
            email: `test@test.com`,
            pwd: `testtest`
        }]

        mQuery.query.mockResolvedValue({ rows: arr });

        const res = await getEmailDB(`test@test.com`);
        expect(res).toEqual(arr);
        expect(res).toHaveLength(1);
        expect(res).toContainEqual(arr[0]);
    })

    test(`error`, async () => {
        mQuery.query.mockResolvedValue({ rows: [] });

        const res = await getEmailDB(`test@test.com`);
        expect(res).toEqual([]);
        expect(res).toHaveLength(0);
    })
})
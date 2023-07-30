import { getAllUser, getUserById, updateUser, deleteUser } from '../../../service/user.service';
import * as repository from '../../../repository/user.repository';

describe(`getAllUser:`, () => {
    test(``, async () => {
        const mock = jest.spyOn(repository, 'getAllUserDB');
        mock.mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@test.test',
            pwd: 'test'
        },
        {
            id: 2,
            name: 'test2',
            surname: 'test2',
            email: 'test2@test.test',
            pwd: 'test2'
        }]);

        const result = await getAllUser();
        expect(mock).toHaveBeenCalled();

        expect(result).toEqual([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@test.test',
            pwd: 'test'
        },
        {
            id: 2,
            name: 'test2',
            surname: 'test2',
            email: 'test2@test.test',
            pwd: 'test2'
        }])
        expect(result).toHaveLength(2)
    })
})

describe(`getUserById:`, () => {
    test(``, async () => {
        const mock = jest.spyOn(repository, 'getUserByIdDB');
        mock.mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@test.test',
            pwd: 'test'
        }])

        const result = await getUserById(1);
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith(1);

        expect(result).toEqual([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@test.test',
            pwd: 'test'
        }]);
        expect(result.length).toBeGreaterThan(0);
        expect(result.length).toBeGreaterThanOrEqual(1);
        expect(result).toHaveLength(1);
    })

    test(``, async () => {
        const mock = jest.spyOn(repository, 'getUserByIdDB').mockResolvedValue([]);
        try {
            await getUserById(1);
        } catch (err: any) {
            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveBeenCalledWith(1);

            expect(err.message).toBe(`ID not found`)
        }
    })
})

describe(`updateUser:`, () => {
    test(``, async () => {
        const mock = jest.spyOn(repository, 'updateUserDB').mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@test.test',
            pwd: 'test'
        }])

        const res = await updateUser(1, 'test', 'test', 'test@test.test', 'test');
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith(1, 'test', 'test', 'test@test.test', 'test');

        expect(res).toEqual([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@test.test',
            pwd: 'test'
        }])
        expect(res.length).toBeGreaterThan(0);
        expect(res.length).toBeLessThan(2);
    })

    test(``, async () => {
        const mock = jest.spyOn(repository, 'updateUserDB').mockResolvedValue([]);
        try {
            await updateUser(1, 'test', 'test', 'test@test.test', 'test');
        } catch (err: any) {
            expect(mock).toHaveBeenCalled();

            expect(err.message).toBe(`can't update`)
        }
    })
})

describe(`deleteUser:`, () => {
    test(``, async () => {
        const mock = jest.spyOn(repository, 'deleteUserDB').mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@test.test',
            pwd: 'test'
        }])

        const result = await deleteUser(1);
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith(1);

        expect(result.length).toBeGreaterThan(0);
        expect(result.length).toBeLessThan(2);
        expect(result).toEqual([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@test.test',
            pwd: 'test'
        }]);

    });

    test(``, async () => {
        const mock = jest.spyOn(repository, 'deleteUserDB').mockResolvedValue([]);
        try {
            await deleteUser(1);
        } catch (err: any) {
            expect(mock).toHaveBeenCalled();

            expect(err.message).toBe(`can not DELETE`)
        }

    });
})
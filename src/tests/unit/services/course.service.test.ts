import { getUsers, getUserById, createCourse, putUserUpdate, deleteUserById } from '../../../service/course.service';
import * as repa from '../../../repository/course.repository';
import exp from 'constants';

describe(`getUsers:`, () => {
    test(``, async () => {
        const mock = jest.spyOn(repa, 'getUsersDB');
        mock.mockResolvedValue([{ id: 1, cousre: 'test' }, { id: 2, cousre: 'test2' }]);

        const res = await getUsers();
        expect(mock).toBeCalled();

        expect(res.length).toBeGreaterThan(0);
        expect(res).toEqual([{ id: 1, cousre: 'test' }, { id: 2, cousre: 'test2' }])
    })

    test(`find error`, async () => {
        const mock = jest.spyOn(repa, 'getUsersDB');
        mock.mockResolvedValue([]);

        try {
            const res = await getUsers();

        } catch (err: any) {
            expect(mock).toBeCalled();
            expect(err.message).toBe(`ERROR data`)
        }
    })
})

describe(`getUserById:`, () => {
    test(``, async () => {
        const mock = jest.spyOn(repa, 'getUserByIdDB');
        mock.mockResolvedValue([{ id: 1, cousre: `test` }]);

        const res = await getUserById(1);
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith(1);

        expect(res.length).toBeGreaterThan(0);
        expect(res.length).toBeLessThanOrEqual(1);

        expect(res).toEqual([{ id: 1, cousre: `test` }]);
        expect(res).toHaveLength(1);
        expect(res).toContainEqual({ id: 1, cousre: `test` });
    })

    test(``, async () => {
        const mock = jest.spyOn(repa, 'getUserByIdDB');
        mock.mockResolvedValue([]);

        try {
            const res = await getUserById(1);

        } catch (err: any) {
            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveBeenCalledWith(1);

            expect(err.message).toBe(`This ID not found`)
        }

    })
})

describe(`createCourse:`, () => {
    test(``, async () => {
        const mock = jest.spyOn(repa, 'createCourseDB');
        mock.mockResolvedValue([{ id: 1, cousre: `test` }]);

        const res = await createCourse(`test`);
        expect(mock).toBeCalled();
        expect(mock).toBeCalledWith(`test`);


        expect(res.length).toBeLessThanOrEqual(1);
        expect(res.length).toBeGreaterThan(0);
        expect(res).toEqual([{ id: 1, cousre: `test` }]);
        expect(res).toHaveLength(1);
        expect(res).toBeTruthy();
    })

    test(``, async () => {
        const mock = jest.spyOn(repa, 'createCourseDB');
        mock.mockResolvedValue([]);

        try {
            await createCourse(`test`);
        } catch (err: any) {
            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveBeenCalledWith(`test`);

            expect(err.message).toBe(`NOT created`)
        }

    })
})

describe(`putUserUpdateDB`, () => {
    test(`should responce new 'test'`, async () => {
        const mock = jest.spyOn(repa, 'putUserUpdateDB');
        mock.mockResolvedValue([{ id: 1, cousre: `test3` }]);

        const data = [{ id: 1, cousre: `test3` }];

        const res = await putUserUpdate(1, `test3`);
        expect(mock).toBeCalled()
        expect(mock).toBeCalledWith(1, `test3`);

        expect(res.length).toBeGreaterThan(0)
        expect(res.length).toBeGreaterThanOrEqual(1);
        expect(res.length).toBeLessThan(3);
        expect(res.length).toBeLessThanOrEqual(1);

        expect(res).toEqual(data)
    })

    test(`catched Error`, async () => {
        const mock = jest.spyOn(repa, 'putUserUpdateDB');
        mock.mockResolvedValue([]);

        try {
            await putUserUpdate(1, `test`);
        } catch (err: any) {
            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveBeenCalledWith(1, `test`);

            expect(err.message).toBe(`NOT updated`)
        }
    })
})

describe(`deleteUserById:`, () => {
    test(``, async () => {
        const mock = jest.spyOn(repa, 'deleteUserByIdDB');
        mock.mockResolvedValue([{ id: 5, cousre: `test5` }]);

        const res = await deleteUserById(5);

        const data = [{ id: 5, cousre: `test5` }];

        expect(mock).toBeCalled();
        expect(mock).toBeCalledWith(5);

        expect(res.length).toBeGreaterThan(0)
        expect(res.length).toBeGreaterThanOrEqual(1);
        expect(res.length).toBeLessThan(2);
        expect(res.length).toBeLessThanOrEqual(1);

        expect(res).toEqual(data);
        expect(res).toContainEqual({ id: 5, cousre: `test5` });
        expect(res).toHaveLength(1);
        expect(res).toBeTruthy();
    })

    test(``, async () => {
        const mock = jest.spyOn(repa, 'deleteUserByIdDB');
        mock.mockResolvedValue([]);

        try {
            await deleteUserById(1);
        } catch (err: any) {
            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveBeenCalledWith(1);

            expect(err.message).toBe(`can't deleted`)
        }
    })
})












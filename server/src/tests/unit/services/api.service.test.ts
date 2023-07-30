import { createUser, authorizationUser } from '../../../service/api.service';
import * as repository from '../../../repository/api.repository';
import bcrypt from 'bcrypt'

describe(`createUser:`, () => {
    test(`success`, async () => {
        const mockUserByEmail = jest.spyOn(repository, 'getEmailDB');
        const mockUserCreate = jest.spyOn(repository, 'createUserDB');
        const mockHashCompare = jest.spyOn(bcrypt, 'hash');

        mockUserByEmail.mockResolvedValue([]);
        mockHashCompare.mockResolvedValue('ngnwqlkg;qwlmglkqw$%@!%4271421');
        mockUserCreate.mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'stest',
            email: 'test@test.ru',
            pwd: 'ngnwqlkg;qwlmglkqw$%@!%4271421'
        }])

        const res = await createUser('test', 'stest', 'test@test.ru', 'testtest')
        expect(mockUserByEmail).toHaveBeenCalled();
        expect(mockUserCreate).toHaveBeenCalled();
        expect(mockHashCompare).toHaveBeenCalled();
        expect(mockHashCompare).toHaveBeenCalledWith('testtest', 10);

        expect(res).toEqual([{
            id: 1,
            name: 'test',
            surname: 'stest',
            email: 'test@test.ru',
            pwd: 'ngnwqlkg;qwlmglkqw$%@!%4271421'
        }])
    })

    test(`errorFoundEmail:`, async () => {
        const mock = jest.spyOn(repository, 'getEmailDB');
        mock.mockResolvedValue([{
            id: 1,
            name: `test`,
            surname: `Stest`,
            email: `test@test.com`,
            pwd: `testtest`
        }])
        try {
            await createUser(`test`, `Stest`, `test@test.com`, `testtest`);
        } catch (err: any) {
            expect(mock).toHaveBeenCalled();
            expect(err.message).toBe(`This Email exist`)
        }
    })

    test(`errorData:`, async () => {
        const mockFound = jest.spyOn(repository, 'getEmailDB');
        const mockHash = jest.spyOn(bcrypt, 'hash');
        const mockData = jest.spyOn(repository, 'createUserDB');

        mockFound.mockResolvedValue([]);
        mockHash.mockResolvedValue('qwewqetqwas');
        mockData.mockResolvedValue([]);

        try {
            await createUser(`test`, `Stest`, `test@test.com`, `testtest`);
            expect(mockFound).toHaveBeenCalled();
            expect(mockFound).toHaveBeenCalledWith(`testtest`);

            expect(mockHash).toHaveBeenCalled();
            expect(mockHash).toHaveBeenCalledWith('testtest', 10);

        } catch (err: any) {
            expect(mockData).toHaveBeenCalled();
            expect(err.message).toBe(`can't creaded`)
        }
    })
})

describe(`authorizationUser:`, () => {
    test(`success`, async () => {
        const mockGetUser = jest.spyOn(repository, 'getEmailDB');
        const mockHashCompare = jest.spyOn(bcrypt, 'compare');

        mockGetUser.mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'stest',
            email: 'test@test.ru',
            pwd: 'testtest'
        }])
        mockHashCompare.mockResolvedValue(true);

        const res = await authorizationUser('test@test.ru', 'testtest')
        expect(mockGetUser).toHaveBeenCalled()
        expect(mockHashCompare).toHaveBeenCalled()
        expect(mockHashCompare).toHaveBeenCalledWith('testtest', 'testtest')

        expect(res).toEqual([{
            id: 1,
            name: 'test',
            surname: 'stest',
            email: 'test@test.ru',
            pwd: 'testtest'
        }])
    })

    test(`Error`, async () => {
        const mockGetUser = jest.spyOn(repository, 'getEmailDB');
        const mockHashCompare = jest.spyOn(bcrypt, 'compare');

        mockGetUser.mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'stest',
            email: 'test@test.ru',
            pwd: 'testtest'
        }])
        mockHashCompare.mockResolvedValue(false);

        try {
            await authorizationUser('test@test.ru', 'testtest')
        } catch (err: any) {
            expect(mockHashCompare).toHaveBeenCalled();
        }

    })
})
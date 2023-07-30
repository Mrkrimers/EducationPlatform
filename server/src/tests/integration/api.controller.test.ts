import request from 'supertest'
import app from '../../app'

let user;
test('POSTreg', async () => {
    const obj = {
        name: 'test',
        surname: 'Stest',
        email: 'test@test.com',
        pwd: 'testtest',
    }
    const res = await request(app).post('/api/register').send(obj)
    user = { ...res.body[0], ...obj };

    console.log(user);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body).toBeTruthy();
})

test('POSTauth', async () => {

    const res = await request(app).post(`/api/auth`).send(user);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body).toBeTruthy();
})

test('DELETE', async () => {
    const res = await request(app).delete(`/api/${user.id}`);

    expect(res.status).toBe(200);
    expect(res.body).toBeTruthy();
    expect(res.body[0].id).toBe(user.id);
})
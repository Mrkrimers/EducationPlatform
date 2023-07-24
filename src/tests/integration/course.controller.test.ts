import request from 'supertest'
import app from '../../app'

let postID;

test('POST', async () => {
    const res = await request(app).post('/course/').send({
        course: `test`
    })
    postID = res.body[0].id;

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
})

test('GET', async () => {
    const res = await request(app).get('/course/');

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body.length).toBeTruthy()
})

test('GETBYID', async () => {
    const res = await request(app).get(`/course/${postID}`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body[0].id).toBe(postID);
})

test('PUT', async () => {
    const res = await request(app).put(`/course/${postID}`).send({
        id: postID, course: 'testtest'
    })

    expect(res.status).toBe(200);
    expect(res.body.length).toBeTruthy();
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body[0]).toEqual({ id: postID, course: 'testtest' })
})

test('DELETE', async () => {
    const res = await request(app).delete(`/course/${postID}`);

    expect(res.status).toBe(200);
    expect(res.body).toBeTruthy();
    expect(res.body.length).toBeGreaterThanOrEqual(1);
})
import buildResponse from "../../../helper/buildResponse";

const response = {
    status: jest.fn(),
    send: jest.fn()
}

describe(`buildResponse function:`, () => {
    test(`success`, () => {
        buildResponse(response, 200, 'success')

        expect(response.status).toHaveBeenCalled();
        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.send).toHaveBeenCalled();
        expect(response.send).toHaveBeenCalledWith(`success`);
    })
})

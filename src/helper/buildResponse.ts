function buildResponse(res, code, message): void {
    res.status(code).send(message);
}

export default buildResponse
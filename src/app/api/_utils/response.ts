import { StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';

export const createResponse = <T>(body: T, status: number) => {
    const data = body;
    const init = { status };
    return Response.json(data, init);
};

export const createErrorResponse = (message: string, status: number) => {
    const data = { message };
    const init = { status };
    return Response.json(data, init);
};

export const createZodErrorResponse = (error: ZodError) => {
    const data = error.issues.at(0)?.message || error.name;
    const init = { status: StatusCodes.BAD_REQUEST };
    return Response.json(data, init);
};

export const createServerErrorResponse = () => {
    const data = { message: 'There was an error' };
    const init = { status: StatusCodes.INTERNAL_SERVER_ERROR };
    return Response.json(data, init);
};

import { ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';
import {
    createErrorResponse,
    createResponse,
    createServerErrorResponse,
    createZodErrorResponse,
} from '@api/_utils/response';
import request, { createURLWithSearchParams, getSearchParamsFromURL } from '@api/_utils/request';
import Urls from '@api/_constants/urls';
import { Comment } from '@api/_models/comment';

const BASE_URL = `${Urls.JSON_PLACEHOLDER}/comments`;

export const GET = async (req: Request): Promise<Response> => {
    try {
        const { postId } = getSearchParamsFromURL<{ postId: string }>(req.url);
        const resp = await request.get<Comment>(createURLWithSearchParams(BASE_URL, { postId }));
        if (!resp.ok) {
            return createErrorResponse('Unable to get comments', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        return createResponse<Comment>(await resp.json(), StatusCodes.OK);
    } catch (error) {
        if (error instanceof ZodError) {
            return createZodErrorResponse(error);
        }
        return createServerErrorResponse();
    }
};

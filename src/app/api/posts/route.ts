import { z } from 'zod';
import { StatusCodes } from 'http-status-codes';
import {
    createErrorResponse,
    createResponse,
    createServerErrorResponse,
    createZodErrorResponse,
} from '@api/_utils/response';
import { createZodObject } from '@api/_utils/zod';
import request from '@api/_utils/request';
import Urls from '@api/_constants/urls';
import { Post } from '@app/api/_models/post';

const BASE_URL = `${Urls.JSON_PLACEHOLDER}/posts`;

const PostSchema = createZodObject<Post>({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string(),
});

export const POST = async (req: Request): Promise<Response> => {
    try {
        const { userId, id, title, body } = PostSchema.parse(await req.json());
        const resp = await request.post<Post, Post>(BASE_URL, { userId, id, title, body });
        if (!resp.ok) {
            return createErrorResponse('Unable to create post', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        return createResponse<Post>(await resp.json(), StatusCodes.CREATED);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return createZodErrorResponse(error);
        }
        return createServerErrorResponse();
    }
};

export const GET = async (): Promise<Response> => {
    try {
        const resp = await request.get<Post[]>(BASE_URL);
        if (!resp.ok) {
            return createErrorResponse('Unable to get posts', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        return createResponse<Post[]>(await resp.json(), StatusCodes.OK);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return createZodErrorResponse(error);
        }
        return createServerErrorResponse();
    }
};

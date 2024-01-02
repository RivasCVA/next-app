import request, { createURLWithSearchParams } from '@api/_utils/request';
import { Comment } from '@api/_models/comment';
import Routes from './routes';

export const getComments = async (postId?: number): Promise<Comment[]> => {
    try {
        const resp = await request.get<Comment[]>(createURLWithSearchParams(Routes.COMMENTS, { postId }));
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return await resp.json();
    } catch (error) {
        console.error('comments.getComments:', error);
        throw new Error('Error getting comments');
    }
};

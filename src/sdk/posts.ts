import request from '@api/_utils/request';
import { Post } from '@api/_models/post';
import Routes from './routes';

export const createPost = async (post: Post): Promise<void> => {
    try {
        const resp = await request.post<Post, Post>(Routes.POSTS, post);
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
    } catch (error) {
        console.error('posts.createPost:', error);
        throw new Error('Error creating post');
    }
};

export const getPosts = async (): Promise<Post[]> => {
    try {
        const resp = await request.get<Post[]>(Routes.POSTS);
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return await resp.json();
    } catch (error) {
        console.error('posts.getPosts:', error);
        throw new Error('Error getting posts');
    }
};

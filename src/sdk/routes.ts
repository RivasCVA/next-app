const Routes = {
    POSTS: '/api/posts',
    COMMENTS: '/api/comments',
} as const satisfies Record<string, string>;

export default Routes;

import * as posts from './posts';
import * as comments from './comments';

const sdk = {
    posts,
    comments,
} as const;

export default sdk;

'use client';

import { FC } from 'react';
import { View } from '@components/Layout';
import { Title } from '@components/Typography';
import Button from '@components/Button';
import sdk from 'src/sdk';

const Home: FC = () => {
    const handlePostGet = async () => {
        const posts = await sdk.posts.getPosts();
        // eslint-disable-next-line no-console
        console.log(posts);
    };

    const handlePostCreate = async () => {
        await sdk.posts.createPost({
            id: 1,
            userId: 1,
            title: 'title1',
            body: 'body1',
        });
    };

    const handleCommentGet = async () => {
        const comments = await sdk.comments.getComments(4);
        // eslint-disable-next-line no-console
        console.log(comments);
    };

    return (
        <View className="min-h-full gap-3 p-4">
            <Title>Example Next.js App</Title>
            <Button onClick={handlePostGet}>Get Posts</Button>
            <Button onClick={handlePostCreate}>Create Post</Button>
            <Button onClick={handleCommentGet}>Get Comments</Button>
        </View>
    );
};

export default Home;

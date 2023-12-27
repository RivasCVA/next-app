import { FC } from 'react';
import Button from '@components/Button';
import { View } from '@components/Layout';
import { Title, Heading, Label, Text } from '@components/Typography';

const Home: FC = () => (
    <View className="min-h-full gap-2 p-4">
        <Title level={1}>Level 1</Title>
        <Title level={2}>Level 2</Title>
        <Title level={3}>Level 3</Title>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Label level={1}>Level 1</Label>
        <Label level={2}>Level 2</Label>
        <Label level={3}>Level 3</Label>
        <Text level={1}>Text 1</Text>
        <Text level={2}>Text 2</Text>
        <Text level={3}>Text 3</Text>
        <Button variant="solid" color="primary" iconLeft="done">
            Solid Primary
        </Button>
        <Button variant="solid" color="secondary">
            Solid Secondary
        </Button>
        <Button variant="solid" color="danger">
            Solid Error
        </Button>
        <Button variant="outline" color="primary">
            Outline Primary
        </Button>
        <Button variant="outline" color="secondary">
            Outline Secondary
        </Button>
        <Button variant="outline" color="danger">
            Outline Error
        </Button>
        <Button variant="basic" color="primary">
            Basic Primary
        </Button>
        <Button className="" variant="basic" color="secondary">
            Basic Secondary
        </Button>
        <Button variant="basic" color="danger">
            Basic Error
        </Button>
    </View>
);

export default Home;

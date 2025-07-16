import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentCard>;


const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isLoading:false,
    comment: {
        id: '1',
        text: 'Hello World',
        user: { id: '1', username: 'User' }
    }
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading:true
};



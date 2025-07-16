import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import withMock from 'storybook-addon-mock';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        StoreDecorator({ user: { authData: { id: '1' } } }),
        withMock
    ]
} as ComponentMeta<typeof ArticleRating>;


const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Rated = Template.bind({});
Rated.args = { articleId: '3' };
Rated.parameters={
    mockData: [
        {
            url: `${_API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 2
                }
            ]
        }]
};
export const NotRated = Template.bind({});
NotRated.args = { articleId: '3' };
NotRated.parameters={
    mockData: [
        {
            url: `${_API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: []
        }]
};




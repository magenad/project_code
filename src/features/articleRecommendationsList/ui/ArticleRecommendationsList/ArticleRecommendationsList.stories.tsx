import React from 'react';
import withMock from 'storybook-addon-mock';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Article } from 'entities/Article';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        StoreDecorator({}),
        withMock
    ]
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;
const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: 'user' },
    blocks: [],
    type: [],
    title: 'title',
    subtitle: 'subTitle'
};
export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${_API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article },
                { ...article, id: '2' },
                { ...article, id: '3' }
            ]
        }
    ]
};
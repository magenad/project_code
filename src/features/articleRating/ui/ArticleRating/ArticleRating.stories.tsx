import React from 'react';
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
    ],
    parameters:{ mockData:{ url: `${_API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: (request: any) => {
            const {
                url,
                method,
                body,
                searchParams
            } = request;

            if (searchParams.articleId == '1') {
                return [
                    {
                        userId: '1',
                        profileId: '2',
                        rate: 2,
                        feedback: 'КГАМ',
                        id: '1'
                    }
                ];
            }
            return [];
        } } }
} as ComponentMeta<typeof ArticleRating>;


const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Default = Template.bind({});
Default.args = { articleId: '3' };




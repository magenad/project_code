import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageFilter } from './ArticlesPageFilter';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';

export default {
    title: 'pages/ArticlesPage/ArticlesPageFilter',
    component: ArticlesPageFilter,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({
        articlesPage: {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
            view: ArticleView.SMALL,
            page: 1,
            limit: 9,
            hasMore: true,
            _inited: false,
            sort: ArticleSortField.CREATED,
            search: '',
            order: 'asc',
            type: ArticleType.ALL
        }
    })
    ]
} as ComponentMeta<typeof ArticlesPageFilter>;


const Template: ComponentStory<typeof ArticlesPageFilter> = (args) => <ArticlesPageFilter {...args} />;

export const Normal = Template.bind({});
Normal.args = {};



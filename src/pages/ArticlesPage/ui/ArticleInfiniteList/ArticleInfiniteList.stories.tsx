import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleInfiniteList } from './ArticleInfiniteList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators:[StoreDecorator({})]
} as ComponentMeta<typeof ArticleInfiniteList>;


const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};



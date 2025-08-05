import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
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
                type: ArticleType.ALL,
            },
        }),
    ],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleTypeTab } from './ArticleTypeTab';

export default {
    title: 'entities/Article/ArticleTypeTab',
    component: ArticleTypeTab,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleTypeTab>;


const Template: ComponentStory<typeof ArticleTypeTab> = (args) => <ArticleTypeTab {...args} />;

export const Normal = Template.bind({});
Normal.args = {};



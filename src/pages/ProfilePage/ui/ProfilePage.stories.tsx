import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            first: 'Ivan',
            lastname: 'Ivanov',
            currency: Currency.RUB,
            city: 'Moscow',
            avatar
        }
    }
})];
Normal.parameters = {
    loki: { skip: true }
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            first: 'Ivan',
            lastname: 'Ivanov',
            currency: Currency.RUB,
            city: 'Moscow',
            avatar
        }
    }
})];
Dark.parameters= {
    loki: { skip: true }
};
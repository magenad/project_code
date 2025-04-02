import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        first: 'Ivan',
        lastname: 'Ivanov',
        currency: Currency.RUB,
        city: 'Moscow',
        avatar
    }
};
Primary.parameters = {
    parameters: {
        loki: { skip: true }
    }
};
export const WithError = Template.bind({});
WithError.args = {
    error: 'true'
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};


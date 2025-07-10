import React from 'react';
import withMock from 'storybook-addon-mock';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';


export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        StoreDecorator({ user: { authData: { id: '1' } } }),
        withMock
    ],
    // parameters: {
    //     mockData: {
    //         // url: `${_API__}/profile-ratings?userId=1&profileId=1`,
    //         url: 'http://testapi.ru/profile-ratings',
    //         method: 'GET',
    //         status: 200,
    //         response: [
    //             {
    //                 userId: '1',
    //                 profileId: '2',
    //                 rate: 3,
    //                 feedback: 'fsffg',
    //                 id: '1'
    //             }
    //         ]
    //     }
    // }
} as ComponentMeta<typeof ProfileRating>;


const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = { profileId: '1' };
Normal.parameters = {
    mockData: {
        // url: `${_API__}/profile-ratings?userId=1&profileId=1`,
        url: 'http://testapi.ru/profile-ratings',
        method: 'GET',
        status: 200,
        response: [
            {
                userId: '1',
                profileId: '2',
                rate: 3,
                feedback: 'fsffg',
                id: '1'
            }
        ]
    }
};



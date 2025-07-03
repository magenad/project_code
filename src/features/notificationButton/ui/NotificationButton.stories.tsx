import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotificationButton } from './NotificationButton';
import { Notification } from 'entities/Notification/model/types/notification';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import withMock from 'storybook-addon-mock';

const notification: Notification = { id: '1', title: 'Title', description: 'Description' };
export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        Story => <div style={{ paddingLeft: '600px', position: 'absolute' }}><Story /></div>,
        StoreDecorator({}),
        withMock
    ],
    parameters: {
        mockData: [
            {
                url: `${_API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    { ...notification },
                    { ...notification, id: '2' },
                    { ...notification, id: '3' }
                ]
            }
        ]
    }
} as ComponentMeta<typeof NotificationButton>;


const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};



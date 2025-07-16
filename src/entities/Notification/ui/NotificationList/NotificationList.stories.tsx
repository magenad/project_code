import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Notification } from '../../model/types/notification';
import withMock from 'storybook-addon-mock';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators:[
        StoreDecorator({}),
        withMock
    ]
} as ComponentMeta<typeof NotificationList>;


const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;
const notification: Notification = { id: '1', title: 'Title', description: 'Description' };
export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
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
};



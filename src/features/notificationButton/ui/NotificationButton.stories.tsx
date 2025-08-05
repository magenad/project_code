import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotificationButton } from './NotificationButton';
import { Notification } from '@/entities/Notification';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const notification: Notification = {
    id: '1',
    title: 'Title',
    description: 'Description',
};
export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ paddingLeft: '600px', position: 'absolute' }}>
                <Story />
            </div>
        ),
        StoreDecorator({}),
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
                    { ...notification, id: '3' },
                ],
            },
        ],
    },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <NotificationButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

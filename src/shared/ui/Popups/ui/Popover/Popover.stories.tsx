import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Popover } from './Popover';
import { Button, ThemeButton } from '../../../Button/Button';
import { Icon } from '../../../Icon/Icon';
import NotificationIcon from '../../../../assets/icons/notification-20-20.svg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
// eslint-disable-next-line my/layer-imports
import { Notification, NotificationList } from '@/entities/Notification';
import withMock from 'storybook-addon-mock';

const notification: Notification = { id: '1', title: 'Title', description: 'Description' };
export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' }
    }, decorators: [
        Story => <div style={{ paddingLeft: '550px', paddingTop: '350px', position: 'absolute' }}><Story /></div>,
        StoreDecorator({}),
        withMock
    ],
    args: {
        trigger: (<Button theme={ThemeButton.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>),
        children: <NotificationList />,
        opened: true
    },
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
} as ComponentMeta<typeof Popover>;


const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left'

};
export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right'
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left'
};
export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right'
};


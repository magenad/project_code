import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args:{
        trigger: <Button>Open</Button>,
        items: [
            { content: 'first' },
            { content: 'second' },
            { content: 'third' }
        ]
    },
    decorators: [
        Story=> <div style={{ padding: '150px' }}><Story/></div>
    ]
} as ComponentMeta<typeof Dropdown>;


const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction:'bottom left',

} ;
export const BottomRight = Template.bind({});
BottomRight.args = {
    direction:'bottom right'
} ;

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction:'top left'
} ;
export const TopRight = Template.bind({});
TopRight.args = {
    direction:'top right'
} ;



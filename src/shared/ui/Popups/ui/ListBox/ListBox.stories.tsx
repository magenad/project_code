import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args:{
        items: [
            { content:'1vvsv23',value:'123' },
            { content:'hgchkgvvvjv',value:'143' },
            { content:'kherkargbgreg',value:'423' },
            { content:'1vvfreryysv23',value:'623' },
        ],
        value:'123',
        label:'ListBox',
        opened:true
    },
    decorators: [
        Story=> <div style={{ paddingLeft: '100px',paddingTop:'200px' }}><Story/></div>
    ]
} as ComponentMeta<typeof ListBox>;


const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;


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



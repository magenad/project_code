import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSize, ThemeButton } from './Button';
import { Theme } from 'app/provider/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children:'Text'
};

export const Clear = Template.bind({});
Clear.args = {
    children:'Text',
    theme:ThemeButton.CLEAR
};
export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children:'Text',
    theme:ThemeButton.CLEAR_INVERTED
};
export const Outline = Template.bind({});
Outline.args = {
    children:'Text',
    theme:ThemeButton.OUTLINED
};
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children:'Text',
    theme:ThemeButton.OUTLINED,
    size:ButtonSize.L
};
export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children:'Text',
    theme:ThemeButton.OUTLINED,
    size:ButtonSize.XL
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children:'Text',
    theme:ThemeButton.OUTLINED
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children:'Text',
    theme:ThemeButton.BACKGROUND
};
export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children:'Text',
    theme:ThemeButton.BACKGROUND_INVERTED
};
export const Square = Template.bind({});
Square.args = {
    children:'>',
    theme:ThemeButton.BACKGROUND_INVERTED,
    square: true,
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children:'>',
    theme:ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size:ButtonSize.L
};
export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children:'>',
    theme:ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size:ButtonSize.XL
};


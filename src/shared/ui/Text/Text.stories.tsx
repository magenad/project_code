import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextSize, ThemeText } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem Ipsum',
    text: ' Description Description Description Description',
};
export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem Ipsum',
    text: ' Description Description Description Description',
    theme: ThemeText.ERROR,
};
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem Ipsum',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: ' Description Description Description Description',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem Ipsum',
    text: ' Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title lorem Ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: ' Description Description Description Description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem Ipsum',
    text: ' Description Description Description Description',
    size:TextSize.L
};
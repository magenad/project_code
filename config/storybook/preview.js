import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecotator';
import { withRouter } from 'storybook-addon-react-router-v6';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { Theme } from '@/shared/const/theme';


export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout:'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app',Theme.LIGHT], color: '#ffffff' },
            { name: 'dark', class: ['app',Theme.DARK], color: '#000000' },
            { name: 'orange', class: ['app',Theme.ORANGE], color: '#ffb005' },
        ],
    },

};
addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(withRouter);
addDecorator(SuspenseDecorator);

// addDecorator(RouterDecorator);
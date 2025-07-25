module.exports = {
    'stories': [
        '../../src/**/*.stories.mdx',
        '../../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    'addons': [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-react-router-v6',
        'storybook-addon-mock',
        'storybook-addon-themes'
    ],
    'framework': '@storybook/react',
    'core': {
        'builder': '@storybook/builder-webpack5',
        'disableWhatsNewNotifications': true
    }
};
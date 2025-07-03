// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:react/jsx-runtime'
    ],
    // 'overrides': [
    //     {
    //         'env': {
    //             'node': true
    //         },
    //         'files': [
    //             '.eslintrc.{js,cjs}'
    //         ],
    //         'parserOptions': {
    //             'sourceType': 'script'
    //         }
    //     }
    // ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'react', 'i18next', 'react-hooks', 'my'],

    settings: {
        react: {
            version: 'detect'
        }
    },

    rules: {
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        indent: ['error', 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] }
        ],
        'object-curly-spacing': [2, 'always'],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to', 'name', 'target', 'justify', 'align', 'direction', 'gap', 'role','as','border']
            }
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'my/path-checker': 'error'
    },
    overrides: [
        {
            files: ['**/**/*.test.{ts,tsx}', '**/**/*.stories.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ]
};

// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true,
    },
    'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
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
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'react',
        'i18next'
    ],
    'rules': {

        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        indent: [2, 4],
        'object-curly-spacing': [2,'always'],
        'i18next/no-literal-string':['error',{ markupOnly:true,ignoreAttribute: ['data-testid','to'] }],
    },
    overrides : [
        {
            files:['**/**/*.test.{ts,tsx}'],
            rules:{
                'i18next/no-literal-string':'off'
            }
        }
    ]
};

//ts-ignore
import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: path.resolve(__dirname,'public','locales'),
        buildLocales:path.resolve(__dirname, 'build','locales'),
    };
    config?.resolve?.modules?.unshift(paths.src);
    config?.resolve?.extensions?.push('.ts', '.tsx');
    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config!.module!.rules.push(buildCssLoader(true));
    config!.plugins!.push(
        new DefinePlugin({
            _IS_DEV__: true,
            _API__: JSON.stringify(''),
            _PROJECT__: JSON.stringify('storybook')
        })
    );

    return config;
};

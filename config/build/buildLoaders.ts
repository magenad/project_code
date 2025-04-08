import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };
    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack']
    };
    const babelLoader = buildBabelLoader(options);
    const cssLoader = buildCssLoader(isDev);
    const fileLoader = {
        test: /\.(png|jpg|gif|woff2|woff)$/,
        use: [
            {
                loader: 'file-loader',
                options: {}
            }
        ]
    };
    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ];
}
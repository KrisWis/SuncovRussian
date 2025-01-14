import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean, isStorybook: boolean) {
    return {
        test: /\.(sa|sc|c)ss$/i,
<<<<<<< HEAD
        exclude: isStorybook ? /node_modules/ : /node_modules\/(?!react-pdf)/,
=======
        exclude: /node_modules\/(?!react-pdf)/,
>>>>>>> 12d4b89 (Delete cnd package for pdf and add react alternative lib.)
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };
}

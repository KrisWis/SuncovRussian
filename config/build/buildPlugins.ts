import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import CircularDependencyPlugin from "circular-dependency-plugin";
<<<<<<< HEAD
<<<<<<< HEAD
import DotenvWebpackPlugin from "dotenv-webpack";
=======
>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)
=======
import DotenvWebpackPlugin from "dotenv-webpack";
>>>>>>> 4fa07a1 (Replace yandex cloud api to uploadthingapi, rewrite api requests, add dotenvplugin for webpack. Theory is finished, but have some details to fix.)
import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const isProd = !isDev;

  const plugins = [
    new DotenvWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/sounds', to: 'sounds' }, 
        { from: 'public/gifs', to: 'gifs' }, 
        { from: 'public/favicon.ico', to: 'favicon.ico' },
      ],
    }),

    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: true,
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    );
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
  }

  return plugins;
}

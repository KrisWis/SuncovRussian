import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
      publicPath: options.isDev
      ? '/'
      : `/${options.publicURL}/`,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options.paths),
    devtool: options.isDev ? "eval-cheap-module-source-map" : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined,

    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
  };
}

import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildCssLoader } from '../config/build/loaders/buildCssLoader';
import path from 'path';
import { DefinePlugin } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],

  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },

  webpackFinal: async (config) => {
    config.resolve!.alias = {
      ...(config.resolve!.alias || {}),
      '@': path.resolve(__dirname, '../src'),
    };

    const paths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    config!.module!.rules = config!.module!.rules || [];

    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
      }),
    );

    return config;
  },

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
};
export default config;

import type { StorybookConfig } from "@storybook/react-webpack5";
import webpack from "webpack";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  webpackFinal: async (config) => {
    config.resolve!.alias = {
      ...(config.resolve!.alias || {}),
      "@": path.resolve(__dirname, "../src"),
    };

    return config;
  },
};
export default config;

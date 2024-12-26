import type { Preview } from '@storybook/react';
import { StyleDecorator } from './decorators/StyleDecorator';
import { StoreDecorator } from './decorators/StoreDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [StyleDecorator, StoreDecorator],
};

export default preview;

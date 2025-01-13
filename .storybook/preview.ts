import type { Preview } from '@storybook/react';

import { StoreDecorator } from './decorators/StoreDecorator';
import { RouterDecorator } from './decorators/RouterDecorator';
import { StyleDecorator } from './decorators/StyleDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [StyleDecorator, StoreDecorator, RouterDecorator],
};

export default preview;

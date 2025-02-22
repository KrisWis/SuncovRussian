import { Decorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../src/shared//store/config/AppStore';
import React from 'react';

export const StoreDecorator: Decorator = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

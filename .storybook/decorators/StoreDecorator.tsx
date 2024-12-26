import { Decorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../src/app/store/AppStore';
import React from 'react';

export const StoreDecorator: Decorator = (story) => (
  <Provider store={store}>{story()}</Provider>
);

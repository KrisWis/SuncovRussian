import { Decorator } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: Decorator = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

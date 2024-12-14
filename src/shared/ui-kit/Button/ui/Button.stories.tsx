import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Valid: Story = {
  args: {
    theme: 'valid',
    children: <>Верно</>,
  },
};

export const Invalid: Story = {
  args: {
    theme: 'invalid',
    children: <>Неверно</>,
  },
};

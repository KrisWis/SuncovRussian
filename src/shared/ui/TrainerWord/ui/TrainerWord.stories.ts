import type { Meta, StoryObj } from '@storybook/react';
import { TrainerWord } from './TrainerWord';

const meta = {
  title: 'Shared/UI/TrainerWord',
  component: TrainerWord,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrainerWord>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
    children: 'Default',
  },
};

export const Invalid: Story = {
  args: {
    type: 'invalid',
    children: 'Invalid',
  },
};

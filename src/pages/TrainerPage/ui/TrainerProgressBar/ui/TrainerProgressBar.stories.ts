import type { Meta, StoryObj } from '@storybook/react';
import { TrainerProgressBar } from './TrainerProgressBar';

const meta = {
  title: 'Pages/Trainer/TrainerProgressBar',
  component: TrainerProgressBar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrainerProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

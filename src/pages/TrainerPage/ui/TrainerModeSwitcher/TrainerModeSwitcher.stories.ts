import type { Meta, StoryObj } from '@storybook/react';
import { TrainerModeSwitcher } from './TrainerModeSwitcher';

const meta = {
  title: 'Pages/Trainer/ModeSwitcher',
  component: TrainerModeSwitcher,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrainerModeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

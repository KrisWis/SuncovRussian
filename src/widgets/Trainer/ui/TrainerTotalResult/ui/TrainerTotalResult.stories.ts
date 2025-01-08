import type { Meta, StoryObj } from '@storybook/react';
import { TrainerTotalResult } from './TrainerTotalResult';

const meta = {
  title: 'Widgets/Trainer/TrainerTotalResult',
  component: TrainerTotalResult,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrainerTotalResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    updateRandomWord: () => {},
    initializeWords: () => {},
  },
};

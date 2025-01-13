import type { Meta, StoryObj } from '@storybook/react';
import { TrainerTotalResult } from './TrainerTotalResult';

const meta = {
  title: 'Pages/Trainer/TrainerTotalResult',
  component: TrainerTotalResult,
  parameters: {
    layout: 'fullscreen',
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

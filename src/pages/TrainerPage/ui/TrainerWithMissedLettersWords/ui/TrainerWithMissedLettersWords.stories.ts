import type { Meta, StoryObj } from '@storybook/react';
import { TrainerWithMissedLettersWords } from './TrainerWithMissedLettersWords';

const meta = {
  title: 'Pages/Trainer/TrainerWithMissedLettersWords',
  component: TrainerWithMissedLettersWords,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrainerWithMissedLettersWords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import { MissedLetterInput } from './MissedLetterInput';

const meta = {
  title: 'Shared/UI/MissedLetterInput',
  component: MissedLetterInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MissedLetterInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Missed: Story = {
  args: {
    isMissed: true,
  },
};

export const Incorrect: Story = {
  args: {
    isIncorrect: true,
  },
};

export const Correct: Story = {
  args: {
    isCorrect: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { TheoryItem } from './TheoryItem';

const meta = {
  title: 'Entities/TheoryItem',
  component: TheoryItem,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TheoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fileKey: 'c6ofh690Rltr3telkaqmW4gB1a8fIhRQqcEbNis7LTrpY0kn',
  },
};

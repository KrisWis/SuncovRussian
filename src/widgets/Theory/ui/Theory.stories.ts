import type { Meta, StoryObj } from '@storybook/react';
import { Theory } from './Theory';

const meta = {
  title: 'Widgets/Theory',
  component: Theory,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Theory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

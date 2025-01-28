import type { Meta, StoryObj } from '@storybook/react';
import { ModeSwitcherItem } from './ModeSwitcherItem';

const meta = {
  title: 'Widgets/ModeSwitcher/ModeSwitcherItem',
  component: ModeSwitcherItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ModeSwitcherItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'Строгий',
  },
};

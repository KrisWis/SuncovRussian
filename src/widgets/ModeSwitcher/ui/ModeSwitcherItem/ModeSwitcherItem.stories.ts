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

export const Active: Story = {
  args: {
    name: 'Фокусировка',
    onClick: () => {},
    modeIsOn: true,
    setModeIsOn: () => {},
    hintText: 'Режим "Фокусировка"',
  },
};

export const InActive: Story = {
  args: {
    name: 'Фокусировка',
    onClick: () => {},
    modeIsOn: false,
    setModeIsOn: () => {},
    hintText: 'Режим "Фокусировка"',
  },
};

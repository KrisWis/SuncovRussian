import type { Meta, StoryObj } from '@storybook/react';
import { ModeSwitcher } from './ModeSwitcher';

const meta = {
  title: 'Widgets/ModeSwitcher',
  component: ModeSwitcher,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ModeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        name: 'Фокусировка',
        onClick: () => {},
        modeIsOn: false,
        setModeIsOn: () => {},
      },

      {
        name: 'Одна жизнь',
        onClick: () => {},
        modeIsOn: true,
        setModeIsOn: () => {},
      },
    ],
  },
};

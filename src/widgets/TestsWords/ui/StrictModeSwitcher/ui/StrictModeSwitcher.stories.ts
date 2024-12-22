import type { Meta, StoryObj } from '@storybook/react';
import { StrictModeSwitcher } from './StrictModeSwitcher';

const meta = {
  title: 'Widgets/StrictModeSwitcher',
  component: StrictModeSwitcher,
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof StrictModeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
import type { Meta, StoryObj } from '@storybook/react';
import { Tip } from './Tip';

const meta = {
  title: 'Widgets/Tip',
  component: Tip,
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof Tip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
import type { Meta, StoryObj } from '@storybook/react';
import { TheorySidebar } from './TheorySidebar';

const meta = {
  title: 'Widgets/TheorySidebar',
  component: TheorySidebar,
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof TheorySidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
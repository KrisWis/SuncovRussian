import type { Meta, StoryObj } from '@storybook/react';
import { TheoryPage } from './TheoryPage';

const meta = {
  title: 'Pages/Theory',
  component: TheoryPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TheoryPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

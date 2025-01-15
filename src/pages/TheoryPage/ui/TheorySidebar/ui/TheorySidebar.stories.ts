import type { Meta, StoryObj } from '@storybook/react';
import { TheorySidebar } from './TheorySidebar';

const meta = {
  title: 'Pages/Theory/TheorySidebar',
  component: TheorySidebar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TheorySidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    pdfFilesTitles: ['Теория 1', 'Теория 2', 'Теория 3'],
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { TheorySidebar } from './TheorySidebar';

const meta = {
<<<<<<< HEAD
  title: 'Widgets/Theory/TheorySidebar',
  component: TheorySidebar,
=======
  title: 'Widgets/TheorySidebar',
  component: TheorySidebar,
  parameters: {
    layout: 'centered',
  },

>>>>>>> 3736a6b (Add SideBar for Theory Block, add Theory Context and add functional of switching sections of theories.)
} satisfies Meta<typeof TheorySidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

<<<<<<< HEAD
export const Primary: Story = {
  args: {
    pdfFilesTitles: ['Теория 1', 'Теория 2', 'Теория 3'],
  },
};
=======
export const Primary: Story = {};
>>>>>>> 3736a6b (Add SideBar for Theory Block, add Theory Context and add functional of switching sections of theories.)

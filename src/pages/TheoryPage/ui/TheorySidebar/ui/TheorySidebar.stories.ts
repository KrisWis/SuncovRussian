import type { Meta, StoryObj } from '@storybook/react';
import { TheorySidebar } from './TheorySidebar';

const meta = {
<<<<<<< HEAD:src/widgets/Theory/ui/TheorySidebar/ui/TheorySidebar.stories.ts
<<<<<<< HEAD
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
=======
  title: 'Widgets/Theory/TheorySidebar',
  component: TheorySidebar,
>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)
=======
  title: 'Pages/Theory/TheorySidebar',
  component: TheorySidebar,
  parameters: {
    layout: 'fullscreen',
  },
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.):src/pages/TheoryPage/ui/TheorySidebar/ui/TheorySidebar.stories.ts
} satisfies Meta<typeof TheorySidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)
export const Primary: Story = {
  args: {
    pdfFilesTitles: ['Теория 1', 'Теория 2', 'Теория 3'],
  },
};
<<<<<<< HEAD
=======
export const Primary: Story = {};
>>>>>>> 3736a6b (Add SideBar for Theory Block, add Theory Context and add functional of switching sections of theories.)
=======
>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)

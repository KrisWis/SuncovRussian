import type { Meta, StoryObj } from '@storybook/react';
import { MainPage } from './MainPage';

const meta = {
  title: 'Pages/Main',
  component: MainPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

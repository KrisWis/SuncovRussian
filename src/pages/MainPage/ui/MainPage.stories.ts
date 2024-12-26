import type { Meta, StoryObj } from '@storybook/react';
import { MainPage } from './MainPage';

const meta = {
  title: 'Pages/MainPage',
  component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

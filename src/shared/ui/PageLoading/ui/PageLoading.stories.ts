import type { Meta, StoryObj } from '@storybook/react';
import { PageLoading } from './PageLoading';

const meta = {
  title: 'Shared/UI/PageLoading',
  component: PageLoading,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PageLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

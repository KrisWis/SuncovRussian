import type { Meta, StoryObj } from '@storybook/react';
import { ErrorComponent } from './ErrorComponent';

const meta = {
  title: 'Shared/UI/Error',
  component: ErrorComponent,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ErrorComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

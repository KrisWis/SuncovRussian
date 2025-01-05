import type { Meta, StoryObj } from '@storybook/react';
import { ErrorComponent } from './ErrorComponent';

const meta = {
  title: 'Shared/UI-Kit/ErrorComponent',
  component: ErrorComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ErrorComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import { TheoryItem } from './TheoryItem';

const meta = {
  title: 'Widgets/Theory/TheoryItem',
  component: TheoryItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TheoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fileKey: 'vr0iFMEtKDTuF9VuymW2xMVu3ezUTdsQt7E9i4c1wDGIKNFP',
  },
};

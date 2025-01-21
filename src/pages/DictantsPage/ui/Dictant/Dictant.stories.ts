import type { Meta, StoryObj } from '@storybook/react';
import { Dictant } from './Dictant';
import { mockDictants } from '../../model/static/mockDictants';

const meta = {
  title: 'Pages/Dictants/Dictant',
  component: Dictant,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dictant>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: mockDictants[0].text,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { DictantsPage } from './DictantsPage';
import { mockDictants } from '../model/static/mockDictants';

const meta = {
  title: 'Pages/Dictants',
  component: DictantsPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DictantsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    dictant: mockDictants[0].items[0],
  },
};

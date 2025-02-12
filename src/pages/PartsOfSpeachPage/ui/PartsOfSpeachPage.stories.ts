import type { Meta, StoryObj } from '@storybook/react';
import { PartsOfSpeachPage } from './PartsOfSpeachPage';
import { mockPartsOfSpeach } from '../model/static/mockPartsOfSpeach';

const meta = {
  title: 'Pages/PartsOfSpeachPage',
  component: PartsOfSpeachPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PartsOfSpeachPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: 'Вводное слово',
    item: mockPartsOfSpeach['Вводное слово'],
  },
};

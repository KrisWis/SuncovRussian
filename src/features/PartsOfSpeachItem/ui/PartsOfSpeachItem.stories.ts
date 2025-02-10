import type { Meta, StoryObj } from '@storybook/react';
import { PartsOfSpeachItem } from './PartsOfSpeachItem';

const meta = {
  title: 'Widgets/PartsOfSpeachItem',
  component: PartsOfSpeachItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PartsOfSpeachItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Мама, видимо, поняла моё состояние. Она бросила шитье и задумалась. Я заметил, как слёзы выступили у неё на глазах и потекли по щекам.',
  },
};

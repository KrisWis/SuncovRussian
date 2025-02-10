import type { Meta, StoryObj } from '@storybook/react';
import { WordsButtonsTest } from './WordsButtonsTest';

const meta = {
  title: 'Widgets/WordsButtonsTest',
  component: WordsButtonsTest,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof WordsButtonsTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Мама, видимо, поняла моё состояние. Она бросила шитье и задумалась. Я заметил, как слёзы выступили у неё на глазах и потекли по щекам.',
  },
};

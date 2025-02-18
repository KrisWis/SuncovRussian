import type { Meta, StoryObj } from '@storybook/react';
import { PartsOfSpeachPage } from './PartsOfSpeachPage';

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
    item: {
      theme: 'Вводное слово',
      items: [
        {
          text: 'Мама, *видимо,* поняла моё состояние. Она бросила шитье и задумалась. Я заметил, как слёзы выступили у неё на глазах и потекли по щекам.',
        },
        {
          text: 'День, *безусловно,* выдался очень удачным. Солнце светило ярко, и легкий ветерок приятно освежал.',
        },
        {
          text: '*К* *счастью,* экзамен прошел успешно. Все студенты, *как* *оказалось,* хорошо подготовились.',
        },
        {
          text: 'Погода, *по-видимому,* собиралась испортиться. Тяжелые тучи медленно заволакивали небо.',
        },
        {
          text: '*Честно* *говоря,* я не ожидал такого поворота событий. Ситуация, *вероятно,* требовала более тщательного анализа.',
        },
      ],
    },
  },
};

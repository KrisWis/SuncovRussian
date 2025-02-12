import type { Meta, StoryObj } from '@storybook/react';
import { PartsOfSpeachItem } from './PartsOfSpeachItem';
import { useState } from 'react';

const PartsOfSpeachItemWrapper: React.FC = () => {
  const [selectedWords, setSelectedWords] = useState<number[]>([]);

  return (
    <PartsOfSpeachItem
      text="Мама, видимо, поняла моё состояние. Она бросила шитье и задумалась. Я заметил, как слёзы выступили у неё на глазах и потекли по щекам."
      maxCorrectAnswersCount={0}
      selectedWords={selectedWords}
      setSelectedWords={setSelectedWords}
    />
  );
};

const meta = {
  title: 'Features/PartsOfSpeachItem',
  component: PartsOfSpeachItemWrapper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PartsOfSpeachItemWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

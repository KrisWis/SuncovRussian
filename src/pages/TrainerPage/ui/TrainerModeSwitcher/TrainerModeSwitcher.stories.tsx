import type { Meta, StoryObj } from '@storybook/react';
import { TrainerModeSwitcher } from './TrainerModeSwitcher';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import { useState } from 'react';

const TrainerModeSwitcherWrapper: React.FC = () => {
  // Настройка контекста
  const [totalTime, setTotalTime] = useState<number>(0);
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false);
  const [isErrorWork, setIsErrorWork] = useState<boolean>(false);
  const [isOneLifeMode, setIsOneLifeMode] = useState<boolean>(false);
  const [isCheckMode, setIsCheckMode] = useState<boolean>(false);
  const [allAttemptsCount, setAllAttemptsCount] = useState<number>(0);

  return (
    <TrainerPageContext.Provider
      value={{
        totalTime,
        setTotalTime,
        isIncorrect,
        setIsIncorrect,
        isErrorWork,
        setIsErrorWork,
        isOneLifeMode,
        setIsOneLifeMode,
        isCheckMode,
        setIsCheckMode,
        allAttemptsCount,
        setAllAttemptsCount,
      }}
    >
      <TrainerModeSwitcher />
    </TrainerPageContext.Provider>
  );
};

const meta = {
  title: 'Pages/Trainer/ModeSwitcher',
  component: TrainerModeSwitcherWrapper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrainerModeSwitcherWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

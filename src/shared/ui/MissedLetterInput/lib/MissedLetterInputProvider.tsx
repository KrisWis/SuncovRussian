import { memo, useState } from 'react';
import { MissedLetterInputContext } from '../model/context/MissedLetterInputContext';

interface MissedLetterInputProviderProps {
  children: React.ReactNode;
}

export const MissedLetterInputProvider: React.FC<MissedLetterInputProviderProps> =
  memo(({ children }): React.JSX.Element => {
    // Инициализация значений для контекста диктанта
    const [missedInputsIDs, setMissedInputsIDs] = useState<number[]>([]);
    const [correctInputsIDs, setCorrectInputsIDs] = useState<number[]>([]);
    const [incorrectInputsIDs, setIncorrectInputsIDs] = useState<number[]>([]);

    return (
      <MissedLetterInputContext.Provider
        value={{
          missedInputsIDs,
          setMissedInputsIDs,
          correctInputsIDs,
          setCorrectInputsIDs,
          incorrectInputsIDs,
          setIncorrectInputsIDs,
        }}
      >
        {children}
      </MissedLetterInputContext.Provider>
    );
  });

MissedLetterInputProvider.displayName = 'MissedLetterInputProvider';

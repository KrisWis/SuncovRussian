import { MissedLetterInputProvider } from '@/shared/ui/MissedLetterInput';
import {
  wordActionsFunctionType,
  wordActionsFunctionTypeWithElemForClick,
} from '../lib/hooks/useWordActions';
import {
  ChoiceWordInterface,
  ChoiceWordsForTrainersItem,
} from '../model/types/choice';
import { PrimaryWordsInterface } from '../model/types/primary';
import {
  TrainerWordsType,
  WordsForTrainersItem,
  WordsForTrainersTypes,
} from '../model/types/types';
import { UnionsWordsInterface } from '../model/types/unions';
import { WithMissedLettersWordsInterface } from '../model/types/withMissedLetters';
import { TrainerChoiceWords } from '../ui/TrainerChoiceWords/TrainerChoiceWords';
import { TrainerPrimaryWords } from '../ui/TrainerPrimaryWords/TrainerPrimaryWords';
import { TrainerUnionsWords } from '../ui/TrainerUnionsWords/TrainerUnionsWords';
import { TrainerWithMissedLettersWords } from '../ui/TrainerWithMissedLettersWords';

type TrainerWords = {
  [key in TrainerWordsType]: React.ReactNode;
};

export const generateTrainerWords = (
  randomWord: WordsForTrainersTypes,
  randomWordsIsReverse: boolean,
  wordOnFail: wordActionsFunctionTypeWithElemForClick,
  wordOnSuccess: wordActionsFunctionType,
  words: WordsForTrainersItem,
  showNewWord: wordActionsFunctionType,
): TrainerWords => {
  return {
    primary: (
      <TrainerPrimaryWords
        randomWord={randomWord as PrimaryWordsInterface}
        randomWordsIsReverse={randomWordsIsReverse}
        wordOnFail={wordOnFail}
        wordOnSuccess={wordOnSuccess}
      />
    ),

    unions: (
      <TrainerUnionsWords
        randomWord={randomWord as UnionsWordsInterface}
        wordOnSuccess={wordOnSuccess}
        wordOnFail={wordOnFail}
      />
    ),

    choice: (
      <TrainerChoiceWords
        randomWord={randomWord as ChoiceWordInterface}
        categories={(words as ChoiceWordsForTrainersItem).categories}
        wordOnSuccess={wordOnSuccess}
        wordOnFail={wordOnFail}
        showNewWord={showNewWord}
      />
    ),

    withMissedLetters: (
      <MissedLetterInputProvider>
        <TrainerWithMissedLettersWords
          randomWord={randomWord as WithMissedLettersWordsInterface}
          wordOnSuccess={wordOnSuccess}
          wordOnFail={wordOnFail}
        />
      </MissedLetterInputProvider>
    ),
  };
};

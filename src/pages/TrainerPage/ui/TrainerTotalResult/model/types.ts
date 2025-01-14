import { WordsTypes } from '../../../model/types/types';

export interface TrainerTotalResultProps {
  updateRandomWord: (words?: WordsTypes[]) => void;
  words: WordsTypes[];
}

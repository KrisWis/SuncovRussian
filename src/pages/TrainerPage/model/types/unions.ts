import { TrainerWordsInterface, WordsForTrainersGeneralItem } from './types';

export type unionTypes = 'Сочинительный' | 'Подчинительный';

export const unionTypes: unionTypes[] = ['Сочинительный', 'Подчинительный'];

export interface UnionsWordsInterface extends TrainerWordsInterface {
  word: string;
  unionType: unionTypes;
}
export interface UnionsWordsForTrainersItem
  extends WordsForTrainersGeneralItem {
  type: 'unions';
  items: UnionsWordsInterface[];
}

import { TrainerWordsInterface } from './types';

export type unionTypes = 'Сочинительный' | 'Подчинительный';

export const unionTypes: unionTypes[] = ['Сочинительный', 'Подчинительный'];

export interface UnionsWordsInterface extends TrainerWordsInterface {
  word: string;
  unionType: unionTypes;
}

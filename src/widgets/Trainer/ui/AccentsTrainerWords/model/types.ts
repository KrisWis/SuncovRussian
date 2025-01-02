import { AccentsWordsInterface } from '../../../model/static/accentsWords';

export interface AccentsTrainerWordsProps {
  randomWord: AccentsWordsInterface;
  randomWordsIsReverse: boolean;
  setRandomWordsIsReverse: React.Dispatch<React.SetStateAction<boolean>>;
  setRandomWordId: React.Dispatch<React.SetStateAction<number | null>>;
  isErrorWork: boolean;
  setIsIncorrect: React.Dispatch<React.SetStateAction<boolean>>;
}

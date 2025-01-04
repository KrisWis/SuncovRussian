export { Trainer } from './ui/Trainer';

export { TrainerReducer } from './model/slice/TrainerSlice';

export type { TrainerSliceSchema } from './model/types/sliceTypes';

export { useWords } from './model/selectors/getTrainerWords/getTrainerWords';

export { TrainerProgressBar } from './ui/TrainerProgressBar/ui/TrainerProgressBar';

export { TrainerContext } from './model/context/TrainerContext';

export { StrictModeSwitcher } from './ui/StrictModeSwitcher/ui/StrictModeSwitcher';

export { wordsForAccentsTests } from './model/static/wordsForAccentsTests';

export { wordsForUnionsTests } from './model/static/wordsForUnionsTests';

export { useTrainerActions } from './model/slice/TrainerSlice';

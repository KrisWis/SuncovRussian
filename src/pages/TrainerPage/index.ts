import { lazy } from 'react';
import { TrainerPageProps } from './ui/TrainerPage';

export const TrainerPage: React.LazyExoticComponent<
  React.FC<TrainerPageProps>
> = lazy(() => {
  return new Promise((resolve) => {
    resolve(
      import('./ui/TrainerPage').then(({ TrainerPage }) => ({
        default: TrainerPage,
      })),
    );
  });
});

export { TrainerReducer } from './model/slice/TrainerPageSlice';

export type { TrainerPageSliceSchema } from './model/types/sliceTypes';

export type { WordsForTrainersTypes } from './model/types/types';

export { useWords } from './model/selectors/getTrainerWords/getTrainerWords';

export { TrainerProgressBar } from './ui/TrainerProgressBar/TrainerProgressBar';

export { TrainerPageContext } from './model/context/TrainerPageContext';

// Static
export { wordsForTrainers } from './model/static/wordsForTrainers';

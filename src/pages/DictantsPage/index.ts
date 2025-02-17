import { lazy } from 'react';
import { DictantsPageProps } from './ui/DictantsPage';

export const DictantsPage: React.LazyExoticComponent<
  React.FC<DictantsPageProps>
> = lazy(() =>
  import('./ui/DictantsPage').then(({ DictantsPage }) => ({
    default: DictantsPage,
  })),
);

export type { DictantType } from '../../features/Dictant/model/types/types';
export { getAllDictants } from './api/dictantsPageApi';

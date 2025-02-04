import { lazy } from 'react';
import { DictantsPageProps } from './ui/DictantsPage';

export const DictantsPage: React.LazyExoticComponent<
  React.FC<DictantsPageProps>
> = lazy(() =>
  import('./ui/DictantsPage').then(({ DictantsPage }) => ({
    default: DictantsPage,
  })),
);

export { mockDictants } from './model/static/mockDictants';

export type { DictantType } from '../../features/Dictant/model/types/types';

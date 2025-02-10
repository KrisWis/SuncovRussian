import { lazy } from 'react';
import { PartsOfSpeachPageProps } from './ui/PartsOfSpeachPage';

export const PartsOfSpeachPage: React.LazyExoticComponent<
  React.FC<PartsOfSpeachPageProps>
> = lazy(() =>
  import('./ui/PartsOfSpeachPage').then(({ PartsOfSpeachPage }) => ({
    default: PartsOfSpeachPage,
  })),
);
export { mockPartsOfSpeach } from './model/static/mockPartsOfSpeach';

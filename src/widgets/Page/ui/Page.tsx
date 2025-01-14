import { memo } from 'react';
import { PageProps } from '../model/types';
import { Header } from './Header/ui/Header';
<<<<<<< HEAD
import { isOnStorybook } from '@/shared/utils/isOnStorybook';

export const Page: React.FC<PageProps> = memo(
  ({ children, 'data-testid': dataTestId, className }): React.JSX.Element => {
=======

export const Page: React.FC<PageProps> = memo(
<<<<<<< HEAD
  ({ children, 'data-testid': dataTestId }): React.JSX.Element => {
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
  ({ children, 'data-testid': dataTestId, className }): React.JSX.Element => {
>>>>>>> 06f1d0e (Bugfix)
    return (
      <div data-testid={dataTestId}>
        <Header />

<<<<<<< HEAD
<<<<<<< HEAD
        <main
          style={{
            justifyContent: isOnStorybook() ? 'center' : 'space-between',
          }}
          className={className}
        >
          {children}
        </main>
=======
        <main>{children}</main>
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
        <main className={className}>{children}</main>
>>>>>>> 06f1d0e (Bugfix)
      </div>
    );
  },
);

Page.displayName = 'Page';

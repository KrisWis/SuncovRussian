import { memo } from 'react';
import { PageProps } from '../model/types';
import { Header } from './Header/ui/Header';

export const Page: React.FC<PageProps> = memo(
  ({ children, 'data-testid': dataTestId }): React.JSX.Element => {
    return (
      <div data-testid={dataTestId}>
        <Header />

        <main>{children}</main>
      </div>
    );
  },
);

Page.displayName = 'Page';

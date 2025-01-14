import { memo } from 'react';
import { PageProps } from '../model/types';
import { Header } from './Header/ui/Header';
import { isOnStorybook } from '@/shared/utils/isOnStorybook';

export const Page: React.FC<PageProps> = memo(
  ({ children, 'data-testid': dataTestId, className }): React.JSX.Element => {
    return (
      <div data-testid={dataTestId}>
        <Header />

        <main
          style={{
            justifyContent: isOnStorybook() ? 'center' : 'space-between',
          }}
          className={className}
        >
          {children}
        </main>
      </div>
    );
  },
);

Page.displayName = 'Page';

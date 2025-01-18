import { memo } from 'react';
import { Header } from './Header/ui/Header';

interface PageProps {
  children: React.ReactNode;
  withHomeButton?: boolean;
  'data-testid'?: string;
  className?: string;
}

export const Page: React.FC<PageProps> = memo(
  ({
    children,
    withHomeButton = true,
    'data-testid': dataTestId,
    className,
  }): React.JSX.Element => {
    return (
      <div data-testid={dataTestId}>
        <Header withHomeButton={withHomeButton} />

        <main
          style={{
            justifyContent: process.env.STORYBOOK ? 'center' : 'space-between',
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

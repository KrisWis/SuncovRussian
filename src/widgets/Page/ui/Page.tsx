import { memo } from 'react';
import { Header } from './Header/ui/Header';
import { Flex } from '@/shared/lib/Stack';

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
      <Flex direction="column" width="100" maxHeight data-testid={dataTestId}>
        <Header withHomeButton={withHomeButton} />

        <main
          style={{
            justifyContent: process.env.STORYBOOK ? 'center' : 'space-between',
          }}
          className={className}
        >
          {children}
        </main>
      </Flex>
    );
  },
);

Page.displayName = 'Page';

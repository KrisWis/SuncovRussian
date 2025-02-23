import { memo } from 'react';
import { Header } from './Header/ui/Header';
import { Flex } from '@/shared/lib/Stack';
import * as styles from './Page.module.scss';
interface PageProps {
  children: React.ReactNode;
  withHomeButton?: boolean;
  'data-testid'?: string;
  className?: string;
  withMarginTop?: boolean;
  withMaxHeight?: boolean;
}

export const Page: React.FC<PageProps> = memo(
  ({
    children,
    withHomeButton = true,
    'data-testid': dataTestId,
    className,
    withMarginTop = false,
    withMaxHeight = true,
  }): React.JSX.Element => {
    return (
      <Flex
        direction="column"
        width="100"
        maxHeight={withMaxHeight}
        data-testid={dataTestId}
      >
        <Header withHomeButton={withHomeButton} />

        <main
          className={`${className ? className : ''} ${
            withMarginTop ? styles.Page__withMarginTop : ''
          }`}
        >
          {children}
        </main>
      </Flex>
    );
  },
);

Page.displayName = 'Page';

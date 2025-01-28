import { Flex } from '@/shared/lib/Stack';
import * as styles from './DictantFooter.module.scss';
import { memo, useContext } from 'react';
import { Button } from '@/shared/ui/Button';
import DislikeSVG from '@/shared/assets/icons/DictantsPage/DislikeSVG.svg';
import LikeSVG from '@/shared/assets/icons/DictantsPage/LikeSVG.svg';
import { useCheckCorrectness } from '../../lib/hooks/useCheckCorrectness';
import { DictantContext } from '../../model/context/DictantContext';

interface DictantFooterProps {
  splitSymbol: string;
  text: string;
}

export const DictantFooter: React.FC<DictantFooterProps> = memo(
  ({ text, splitSymbol }): React.JSX.Element => {
    // Получение данных из контекста
    const {
      correctLetters,
      maxCorrectLetters,
      isMissed,
      setCorrectLetters,
      setMaxCorrectLetters,
      setIsIncorrect,
      setIsMissed,
      isIncorrect,
    } = useContext(DictantContext);

    // Получаем функцию проверки из хука
    const { checkCorrectness } = useCheckCorrectness(
      text,
      splitSymbol,
      setCorrectLetters,
      setMaxCorrectLetters,
      setIsIncorrect,
      setIsMissed,
    );

    return (
      <Flex
        maxHeight
        align="start"
        relative
        justify="center"
        width="100"
        className={styles.DictantFooter__check}
      >
        {(!isIncorrect || isMissed) &&
          (maxCorrectLetters !== correctLetters || !maxCorrectLetters) && (
            <Button
              data-testid="Dictant__check"
              onClick={checkCorrectness}
              variant="medium"
              type="button"
              className={styles.DictantFooter__check}
            >
              Проверить
            </Button>
          )}

        {maxCorrectLetters > 0 && !isMissed && (
          <>
            {correctLetters === maxCorrectLetters ? (
              <>
                {process.env.NODE_ENV === 'test' ? (
                  <div data-testid="Dictant__like">
                    <LikeSVG className={styles.DictantFooter__mark} />
                  </div>
                ) : (
                  <LikeSVG className={styles.DictantFooter__mark} />
                )}
              </>
            ) : (
              <>
                {process.env.NODE_ENV === 'test' ? (
                  <div data-testid="Dictant__dislike">
                    <DislikeSVG className={styles.DictantFooter__mark} />
                  </div>
                ) : (
                  <DislikeSVG className={styles.DictantFooter__mark} />
                )}
              </>
            )}
          </>
        )}
      </Flex>
    );
  },
);

DictantFooter.displayName = 'DictantFooter';

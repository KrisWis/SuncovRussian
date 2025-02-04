import { Flex } from '@/shared/lib/Stack';
import * as styles from './TemplateForTests.module.scss';
import { memo } from 'react';
import { Button } from '../../Button';
import DislikeSVG from '@/shared/assets/icons/DictantsPage/DislikeSVG.svg';
import LikeSVG from '@/shared/assets/icons/DictantsPage/LikeSVG.svg';
import { TemplateForTestsMark } from './TemplateForTestsMark/TemplateForTestsMark';

interface TemplateForTestsProps {
  // Required props
  testElement: React.ReactNode;
  checkButtonOnClick: () => void;
  correctAnswersCount: number;
  maxCorrectAnswersCount: number;
  testIsFailed: boolean;
  testHasMissedAnswers: boolean;

  // Optional props
  theme?: string;
  dataTestIdForCheckButton?: string;
  dataTestIdForLike?: string;
  dataTestIdForDislike?: string;
}

export const TemplateForTests: React.FC<TemplateForTestsProps> = memo(
  ({
    theme,
    testElement,
    dataTestIdForCheckButton,
    dataTestIdForLike,
    dataTestIdForDislike,
    checkButtonOnClick,
    correctAnswersCount,
    maxCorrectAnswersCount,
    testIsFailed,
    testHasMissedAnswers,
  }): React.JSX.Element => {
    return (
      <Flex direction="column" gap="50" maxHeight width="100">
        <h1 className={styles.TemplateForTests__title}>тема: {theme}</h1>

        {testElement}

        <Flex
          maxHeight
          align="start"
          relative
          justify="center"
          width="100"
          className={styles.TemplateForTests__check}
        >
          {(!testIsFailed || testHasMissedAnswers) &&
            (correctAnswersCount !== maxCorrectAnswersCount ||
              !maxCorrectAnswersCount) && (
              <Button
                data-testid={dataTestIdForCheckButton}
                onClick={checkButtonOnClick}
                variant="medium"
                type="button"
                className={styles.TemplateForTests__check}
              >
                Проверить
              </Button>
            )}

          {maxCorrectAnswersCount > 0 && !testHasMissedAnswers && (
            <span className={styles.TemplateForTests__totalText}>
              Итог: {correctAnswersCount}/{maxCorrectAnswersCount}
            </span>
          )}

          {maxCorrectAnswersCount > 0 && !testHasMissedAnswers && (
            <>
              {correctAnswersCount === maxCorrectAnswersCount ? (
                <TemplateForTestsMark
                  markElement={
                    <LikeSVG className={styles.TemplateForTests__mark} />
                  }
                  dataTestIDForMark={dataTestIdForLike}
                />
              ) : (
                <TemplateForTestsMark
                  markElement={
                    <DislikeSVG className={styles.TemplateForTests__mark} />
                  }
                  dataTestIDForMark={dataTestIdForDislike}
                />
              )}
            </>
          )}
        </Flex>
      </Flex>
    );
  },
);

TemplateForTests.displayName = 'TemplateForTests';

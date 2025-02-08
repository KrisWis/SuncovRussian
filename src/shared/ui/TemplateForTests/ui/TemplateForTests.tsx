import { Flex } from '@/shared/lib/Stack';
import * as styles from './TemplateForTests.module.scss';
import { memo } from 'react';
import { Button } from '../../Button';
import DislikeSVG from '@/shared/assets/icons/DictantsPage/DislikeSVG.svg';
import LikeSVG from '@/shared/assets/icons/DictantsPage/LikeSVG.svg';
import { TemplateForTestsMark } from './TemplateForTestsMark/TemplateForTestsMark';
import { playSound } from '@/shared/utils/playSound';

export interface CheckButtonOnClickResult {
  testIsFailed: boolean;
  testHasMissedAnswers: boolean;
}

interface TemplateForTestsProps {
  // Required props
  testElement: React.ReactNode;
  checkButtonOnClick: () => CheckButtonOnClickResult;
  correctAnswersCount: number;
  maxCorrectAnswersCount: number;
  testIsFailed: boolean;
  testHasMissedAnswers: boolean;

  // Optional props
  className?: string;
  theme?: string;
  dataTestIdForCheckButton?: string;
  dataTestIdForLike?: string;
  dataTestIdForDislike?: string;
}

export const TemplateForTests: React.FC<TemplateForTestsProps> = memo(
  ({
    className,
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
    // Если тест провален, то проигрываем соответствующий звук
    const checkButtonHandleClick = () => {
      const { testIsFailed, testHasMissedAnswers } = checkButtonOnClick();

      if (testIsFailed && !testHasMissedAnswers) {
        playSound('FailSound');
      }
    };

    return (
      <Flex
        direction="column"
        gap="50"
        maxHeight
        width="100"
        className={className}
      >
        {theme && (
          <h1 className={styles.TemplateForTests__title}>тема: {theme}</h1>
        )}

        <Flex width="80" gap="30" justify="center" direction="column">
          {testElement}

          <Flex
            width="100"
            justify={
              maxCorrectAnswersCount > 0 && !testHasMissedAnswers
                ? 'end'
                : 'center'
            }
            relative
          >
            {(!testIsFailed || testHasMissedAnswers) &&
              (correctAnswersCount !== maxCorrectAnswersCount ||
                !maxCorrectAnswersCount) && (
                <Button
                  data-testid={dataTestIdForCheckButton}
                  onClick={checkButtonHandleClick}
                  variant="medium"
                  type="button"
                  className={styles.TemplateForTests__check}
                >
                  Проверить
                </Button>
              )}

            <Flex align="center" direction="column" gap="10">
              {maxCorrectAnswersCount > 0 && !testHasMissedAnswers && (
                <span className={styles.TemplateForTests__totalText}>
                  Итог: {correctAnswersCount}/{maxCorrectAnswersCount}
                </span>
              )}

              {maxCorrectAnswersCount > 0 && !testHasMissedAnswers && (
                <>
                  {correctAnswersCount === maxCorrectAnswersCount ? (
                    <TemplateForTestsMark
                      markElement={<LikeSVG />}
                      dataTestIDForMark={dataTestIdForLike}
                    />
                  ) : (
                    <TemplateForTestsMark
                      markElement={<DislikeSVG />}
                      dataTestIDForMark={dataTestIdForDislike}
                    />
                  )}
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  },
);

TemplateForTests.displayName = 'TemplateForTests';

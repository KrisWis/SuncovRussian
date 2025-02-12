import { Flex } from '@/shared/lib/Stack';
import * as styles from './TemplateForTests.module.scss';
import { memo, useMemo } from 'react';
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
  continueButtonOnClick?: () => void;

  // For Tests
  dataTestIdForCheckButton?: string;
  dataTestIdForLike?: string;
  dataTestIdForDislike?: string;
}

export const TemplateForTests: React.FC<TemplateForTestsProps> = memo(
  ({
    className,
    theme,
    testElement,
    checkButtonOnClick,
    correctAnswersCount,
    maxCorrectAnswersCount,
    testIsFailed,
    testHasMissedAnswers,
    continueButtonOnClick,
    dataTestIdForCheckButton,
    dataTestIdForLike,
    dataTestIdForDislike,
  }): React.JSX.Element => {
    // Если тест провален, то проигрываем соответствующий звук
    const checkButtonHandleClick = () => {
      const { testIsFailed, testHasMissedAnswers } = checkButtonOnClick();

      if (testIsFailed && !testHasMissedAnswers) {
        playSound('FailSound');
      }
    };

    // Условие того, что появляются итоги теста
    const hasNotResult = useMemo(
      () =>
        (!testIsFailed || testHasMissedAnswers) &&
        (correctAnswersCount !== maxCorrectAnswersCount ||
          !maxCorrectAnswersCount),
      [
        correctAnswersCount,
        maxCorrectAnswersCount,
        testHasMissedAnswers,
        testIsFailed,
      ],
    );

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
              maxCorrectAnswersCount > 0 &&
              !testHasMissedAnswers &&
              !continueButtonOnClick
                ? 'end'
                : 'center'
            }
            relative
          >
            {(hasNotResult || continueButtonOnClick) && (
              <Button
                data-testid={dataTestIdForCheckButton}
                onClick={
                  !hasNotResult && continueButtonOnClick
                    ? continueButtonOnClick
                    : checkButtonHandleClick
                }
                variant="medium"
                type="button"
                className={styles.TemplateForTests__check}
              >
                {hasNotResult ? 'Проверить' : 'Продолжить'}
              </Button>
            )}

            <Flex
              className={`${continueButtonOnClick ? styles.TemplateForTests__resultsWrapper : ''}`}
              align="center"
              direction="column"
              gap="10"
            >
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

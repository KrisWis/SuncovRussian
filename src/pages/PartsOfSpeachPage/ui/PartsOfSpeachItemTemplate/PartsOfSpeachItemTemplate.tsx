import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import {
  clearWords,
  PartsOfSpeachItem,
  PartsOfSpeachItemType,
  useContinuePartsOfSpeachItem,
} from '@/features/PartsOfSpeachItem';
import { ProviderForTestsContext } from '@/shared/lib/ProviderForTests';
import { useCheckPartsOfSpeachItemCorrectness } from '@/features/PartsOfSpeachItem';

export const PartsOfSpeachItemTemplate: React.FC = memo(
  (): React.JSX.Element => {
    // Получаем данные из контекста
    const {
      maxCorrectAnswersCount,
      correctAnswersCount,
      testIsFailed,
      theme,
      items,
      setMaxCorrectAnswersCount,
      setCorrectAnswersCount,
      setTestIsFailed,
      currentItemIndex,
      setCurrentItemIndex,
    } = useContext(ProviderForTestsContext);

    // Функционал выбора слова
    const [selectedWords, setSelectedWords] = useState<number[]>([]);

    // Делаем стейт для индексов тестов, которые уже были пройдены
    const [passedTestsIndexes, setPassedTestsIndexes] = useState<number[]>([]);

    // Получаем функцию проверки
    const currentItem = useMemo(
      () => (items as PartsOfSpeachItemType[])[currentItemIndex],
      [currentItemIndex, items],
    );

    const { checkPartsOfSpeachItemCorrectness } =
      useCheckPartsOfSpeachItemCorrectness(
        currentItem ? currentItem.text : '',
        setMaxCorrectAnswersCount,
        setCorrectAnswersCount,
        setTestIsFailed,
      );

    // Получаем функцию продолжения
    const { continuePartsOfSpeachItem } = useContinuePartsOfSpeachItem(
      setCurrentItemIndex,
      currentItemIndex,
      items as PartsOfSpeachItemType[],
      setPassedTestsIndexes,
      passedTestsIndexes,
    );

    // Соединяем её с функцией очистки
    const continueButtonOnClick = useCallback(() => {
      // Очищаем все данные
      clearWords(
        setMaxCorrectAnswersCount,
        setCorrectAnswersCount,
        setTestIsFailed,
        setSelectedWords,
      );

      const timeoutForClearing = setTimeout(() => {
        // Вызываем функцию продолжения
        continuePartsOfSpeachItem();
        clearTimeout(timeoutForClearing);
      }, 300);
    }, [
      continuePartsOfSpeachItem,
      setCorrectAnswersCount,
      setMaxCorrectAnswersCount,
      setSelectedWords,
      setTestIsFailed,
    ]);

    // Обнуляем прошлые результаты и значения при смене темы
    useEffect(() => {
      clearWords(
        setMaxCorrectAnswersCount,
        setCorrectAnswersCount,
        setTestIsFailed,
        setSelectedWords,
      );

      setCurrentItemIndex(0);
      setPassedTestsIndexes([]);
    }, [
      theme,
      setCorrectAnswersCount,
      setMaxCorrectAnswersCount,
      setSelectedWords,
      setTestIsFailed,
      setCurrentItemIndex,
      items,
    ]);

    return (
      <>
        {currentItem && (
          <TemplateForTests
            testElement={
              <PartsOfSpeachItem
                text={currentItem.text}
                maxCorrectAnswersCount={maxCorrectAnswersCount}
                setSelectedWords={setSelectedWords}
                selectedWords={selectedWords}
              />
            }
            checkButtonOnClick={checkPartsOfSpeachItemCorrectness}
            correctAnswersCount={correctAnswersCount}
            maxCorrectAnswersCount={maxCorrectAnswersCount}
            testIsFailed={testIsFailed}
            testHasMissedAnswers={false} // Всегда false, так как нет проверки на пропущенные слова
            theme={theme}
            continueButtonOnClick={continueButtonOnClick}
            withDislike={false}
            withLike
            withResults={false}
            dataTestIdForButton={`PartsOfSpeachPage__button`}
            dataTestIdForDislike={`PartsOfSpeachPage__dislike`}
            dataTestIdForLike={`PartsOfSpeachPage__like`}
          />
        )}
      </>
    );
  },
);

PartsOfSpeachItemTemplate.displayName = 'PartsOfSpeachItemTemplate';

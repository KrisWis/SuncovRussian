import { memo, useCallback, useContext, useEffect, useState } from 'react';
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
    const { checkPartsOfSpeachItemCorrectness } =
      useCheckPartsOfSpeachItemCorrectness(
        (items as PartsOfSpeachItemType[])[currentItemIndex].text,
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

    // Обнуляем прошлые результаты
    useEffect(() => {
      clearWords(
        setMaxCorrectAnswersCount,
        setCorrectAnswersCount,
        setTestIsFailed,
        setSelectedWords,
      );
    }, [
      theme,
      setCorrectAnswersCount,
      setMaxCorrectAnswersCount,
      setSelectedWords,
      setTestIsFailed,
    ]);

    return (
      <TemplateForTests
        testElement={
          <PartsOfSpeachItem
            text={(items as PartsOfSpeachItemType[])[currentItemIndex].text}
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
    );
  },
);

PartsOfSpeachItemTemplate.displayName = 'PartsOfSpeachItemTemplate';

import { memo, useCallback, useContext, useEffect } from 'react';
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
    );

    // Соединяем её с функцией очистки
    const continueButtonOnClick = useCallback(() => {
      // Вызываем функцию продолжения
      continuePartsOfSpeachItem();

      // Очищаем все данные
      clearWords(
        setMaxCorrectAnswersCount,
        setCorrectAnswersCount,
        setTestIsFailed,
      );
    }, [
      continuePartsOfSpeachItem,
      setCorrectAnswersCount,
      setMaxCorrectAnswersCount,
      setTestIsFailed,
    ]);

    // Обнуляем прошлые результаты
    useEffect(() => {
      clearWords(
        setMaxCorrectAnswersCount,
        setCorrectAnswersCount,
        setTestIsFailed,
      );
    }, [
      theme,
      setCorrectAnswersCount,
      setMaxCorrectAnswersCount,
      setTestIsFailed,
    ]);

    return (
      <TemplateForTests
        testElement={
          <PartsOfSpeachItem
            text={(items as PartsOfSpeachItemType[])[currentItemIndex].text}
            maxCorrectAnswersCount={maxCorrectAnswersCount}
          />
        }
        checkButtonOnClick={checkPartsOfSpeachItemCorrectness}
        correctAnswersCount={correctAnswersCount}
        maxCorrectAnswersCount={maxCorrectAnswersCount}
        testIsFailed={testIsFailed}
        testHasMissedAnswers={false} // Всегда false, так как нет проверки на пропущенные слова
        theme={theme}
        continueButtonOnClick={continueButtonOnClick}
      />
    );
  },
);

PartsOfSpeachItemTemplate.displayName = 'PartsOfSpeachItemTemplate';

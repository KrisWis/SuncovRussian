import { memo, useContext } from 'react';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import {
  PartsOfSpeachItem,
  PartsOfSpeachItemType,
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
    } = useContext(ProviderForTestsContext);

    // Получаем функцию проверки
    const { checkPartsOfSpeachItemCorrectness } =
      useCheckPartsOfSpeachItemCorrectness(
        (items as PartsOfSpeachItemType[])[0].text,
        setMaxCorrectAnswersCount,
        setCorrectAnswersCount,
        setTestIsFailed,
      );

    return (
      <TemplateForTests
        testElement={
          <PartsOfSpeachItem
            text={(items as PartsOfSpeachItemType[])[0].text}
            maxCorrectAnswersCount={maxCorrectAnswersCount}
          />
        }
        buttonOnClick={checkPartsOfSpeachItemCorrectness}
        correctAnswersCount={correctAnswersCount}
        maxCorrectAnswersCount={maxCorrectAnswersCount}
        testIsFailed={testIsFailed}
        testHasMissedAnswers={false} // Всегда false, так как нет проверки на пропущенные слова
        theme={theme}
      />
    );
  },
);

PartsOfSpeachItemTemplate.displayName = 'PartsOfSpeachItemTemplate';

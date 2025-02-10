import { memo, useContext } from 'react';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import {
  PartsOfSpeachItem,
  PartsOfSpeachItemType,
} from '@/features/PartsOfSpeachItem';
import { ProviderForTestsContext } from '@/shared/lib/ProviderForTests';

export const PartsOfSpeachItemTemplate: React.FC = memo(
  (): React.JSX.Element => {
    // Получаем данные из контекста
    const {
      maxCorrectAnswersCount,
      correctAnswersCount,
      testIsFailed,
      testHasMissedAnswers,
      theme,
      items,
    } = useContext(ProviderForTestsContext);

    return (
      <TemplateForTests
        testElement={
          <PartsOfSpeachItem
            text={(items as PartsOfSpeachItemType[])[0].text}
          />
        }
        buttonOnClick={() => ({
          testHasMissedAnswers: false,
          testIsFailed: false,
        })}
        correctAnswersCount={correctAnswersCount}
        maxCorrectAnswersCount={maxCorrectAnswersCount}
        testIsFailed={testIsFailed}
        testHasMissedAnswers={testHasMissedAnswers}
        theme={theme}
      />
    );
  },
);

PartsOfSpeachItemTemplate.displayName = 'PartsOfSpeachItemTemplate';

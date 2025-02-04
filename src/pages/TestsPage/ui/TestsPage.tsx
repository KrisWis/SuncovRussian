import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { mockTests } from '../model/static/mockTests';
import { RadioButtonsTest } from '@/features/RadioButtonsTest';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import { Flex } from '@/shared/lib/Stack';

// TODO: написать тесты

export interface TestsPageProps {
  theme: string;
}

export const TestsPage: React.FC<TestsPageProps> = memo(
  ({ theme }): React.JSX.Element => {
    console.log(mockTests[theme]);
    return (
      <Page withMarginTop>
        <TemplateForTests
          testElement={
            <>
              {mockTests[theme].map((test) => (
                <Flex
                  width="100"
                  key={test.caption}
                  direction="column"
                  gap="50"
                >
                  {test.type === 'radioButtons' ? (
                    <RadioButtonsTest
                      hasOneCorrectAnswer={test.hasOneCorrectAnswer}
                      caption={test.caption}
                      items={test.items}
                    />
                  ) : (
                    <></>
                  )}
                </Flex>
              ))}
            </>
          }
          checkButtonOnClick={() => {}}
          correctAnswersCount={0}
          maxCorrectAnswersCount={0}
          testIsFailed={false}
          testHasMissedAnswers={false}
          theme={theme}
        />
      </Page>
    );
  },
);

TestsPage.displayName = 'TestsPage';

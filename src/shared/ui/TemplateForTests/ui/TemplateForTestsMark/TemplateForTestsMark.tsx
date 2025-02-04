import { memo } from 'react';

interface TemplateForTestsMarkProps {
  markElement: React.ReactNode;
  dataTestIDForMark?: string;
}

export const TemplateForTestsMark: React.FC<TemplateForTestsMarkProps> = memo(
  ({ markElement, dataTestIDForMark }): React.JSX.Element => {
    return (
      <>
        {process.env.NODE_ENV === 'test' ? (
          <div data-testid={dataTestIDForMark}>{markElement}</div>
        ) : (
          markElement
        )}
      </>
    );
  },
);

TemplateForTestsMark.displayName = 'TemplateForTestsMark';

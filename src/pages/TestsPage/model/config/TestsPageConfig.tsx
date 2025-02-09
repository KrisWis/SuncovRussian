import { RadioButtonsTestTemplate } from '../../ui/RadioButtonsTestTemplate/RadioButtonsTestTemplate';
import { WordsButtonsTestTemplate } from '../../ui/WordsButtonsTestTemplate/WordsButtonsTestTemplate';
import { TestsItemType } from '../types/types';

interface TestsPageConfigItem {
  type: TestsItemType;
  element: React.ReactNode;
}

export const TestsPageConfig: TestsPageConfigItem[] = [
  {
    type: 'radioButtons',
    element: <RadioButtonsTestTemplate />,
  },
  {
    type: 'wordsButtons',
    element: <WordsButtonsTestTemplate />,
  },
];

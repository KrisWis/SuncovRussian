import { RadioButtonsTestType } from '@/features/RadioButtonsTest';
import { WordsButtonsTestType } from '@/features/WordsButtonsTest';

export type TestsItemType = 'radioButtons' | 'wordsButtons';

export type TestsItemProps = RadioButtonsTestType | WordsButtonsTestType;

export interface TestsItem {
  type: TestsItemType;
  items: TestsItemProps[];
}

export interface TestsType {
  [key: string]: TestsItem;
}

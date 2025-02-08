import { RadioButtonsTestType } from '@/features/RadioButtonsTest';

export type TestsItemType = 'radioButtons';

export type TestsItemProps = RadioButtonsTestType;

export interface TestsItem {
  type: TestsItemType;
  items: TestsItemProps[];
}

export interface TestsType {
  [key: string]: TestsItem;
}

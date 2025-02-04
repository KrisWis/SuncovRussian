import { RadioButtonsTestType } from '@/features/RadioButtonsTest';

type TestsItemType = 'radioButtons';

type TestsItemProps = RadioButtonsTestType;

export interface TestsItem {
  type: TestsItemType;
}

export type TestsType = {
  [key: string]: TestsItemProps[];
};

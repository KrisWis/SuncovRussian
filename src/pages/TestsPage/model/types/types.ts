import { RadioButtonsTestProps } from './radioButtons';

type TestsItemType = 'radioButtons';

type TestsItemProps = RadioButtonsTestProps;

export interface TestsItem {
  type: TestsItemType;
}

export type TestsType = {
  [key: string]: TestsItemProps[];
};

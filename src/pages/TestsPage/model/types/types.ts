import { TestType } from '@/features/Test';

export interface TestsItem {
  items: TestType[];
}

export interface TestsType {
  [key: string]: TestsItem;
}

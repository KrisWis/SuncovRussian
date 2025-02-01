import { TestsItem } from './types';

interface RadioButtonsTestItem {
  value: string;
  isCorrect: boolean;
}

export interface RadioButtonsTestProps extends TestsItem {
  type: 'radioButtons';
  caption: string;
  items: RadioButtonsTestItem[];
}

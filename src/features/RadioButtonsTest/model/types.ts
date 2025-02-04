// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { TestsItem } from '@/pages/TestsPage';

export interface RadioButtonsTestItem {
  value: string;
  isCorrect: boolean;
}

export interface RadioButtonsTestType extends TestsItem {
  type: 'radioButtons';
  caption: string;
  items: RadioButtonsTestItem[];
  hasOneCorrectAnswer: boolean;
}

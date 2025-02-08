export interface RadioButtonsTestItem {
  value: string;
  isCorrect: boolean;
}

export interface RadioButtonsTestType {
  caption: string;
  items: RadioButtonsTestItem[];
  hasOneCorrectAnswer: boolean;
}

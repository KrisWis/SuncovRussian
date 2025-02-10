export interface TestItem {
  value: string;
  isCorrect: boolean;
}

export interface TestType {
  caption: string;
  items: TestItem[];
  hasOneCorrectAnswer: boolean;
}

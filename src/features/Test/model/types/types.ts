export interface Answer {
  id: number;
  text: string;
  is_correct: boolean;
  question: number;
}

export interface Question {
  id: number;
  answers: Answer[];
  text: string;
  has_one_correct_answer: boolean;
  test: number;
}

export interface TestInterface {
  id: number;
  questions: Question[];
  title: string;
}

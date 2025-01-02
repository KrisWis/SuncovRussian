export type HeaderCategories = 'Тесты' | 'Теория' | 'Тренажер' | 'Сочинения';

export type HeaderMenu = {
  [key in HeaderCategories]: string[];
};

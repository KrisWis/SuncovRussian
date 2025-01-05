export type HeaderCategories = 'Тесты' | 'Теория' | 'Тренажеры' | 'Сочинения';

export type HeaderMenu = {
  [key in HeaderCategories]: string[];
};

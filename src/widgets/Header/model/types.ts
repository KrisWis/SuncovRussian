export type HeaderCategories =
  | 'Диктанты'
  | 'Пунктуация'
  | 'Теория'
  | 'Тренажеры'
  | 'Сочинения';

export type HeaderMenu = {
  [key in HeaderCategories]: string[];
};

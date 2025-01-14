<<<<<<< HEAD
export type HeaderCategories =
  | 'Диктанты'
  | 'Пунктуация'
  | 'Теория'
  | 'Тренажеры'
  | 'Сочинения';
=======
export type HeaderCategories = 'Тесты' | 'Теория' | 'Тренажеры' | 'Сочинения';
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)

export type HeaderMenu = {
  [key in HeaderCategories]: string[];
};

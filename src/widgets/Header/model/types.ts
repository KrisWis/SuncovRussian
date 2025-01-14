<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3736a6b (Add SideBar for Theory Block, add Theory Context and add functional of switching sections of theories.)
export type HeaderCategories =
  | 'Диктанты'
  | 'Пунктуация'
  | 'Теория'
  | 'Тренажеры'
  | 'Сочинения';
<<<<<<< HEAD
=======
export type HeaderCategories = 'Тесты' | 'Теория' | 'Тренажеры' | 'Сочинения';
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)
=======
>>>>>>> 3736a6b (Add SideBar for Theory Block, add Theory Context and add functional of switching sections of theories.)

export type HeaderMenu = {
  [key in HeaderCategories]: string[];
};

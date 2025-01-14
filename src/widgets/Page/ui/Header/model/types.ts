export type TrainerSubcategories =
  | 'Ударения'
<<<<<<< HEAD
<<<<<<< HEAD
  | 'Словарные слова'
  | 'Виды союзов'
  | 'Наречия'
=======
  | 'Паронимы'
  | 'Тропы'
  | 'Словарные слова'
  | 'Виды союзов'
  | 'Виды подчинительных союзов'
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
  | 'Словарные слова'
  | 'Виды союзов'
  | 'Наречия'
>>>>>>> 786c80e (Add new trainers.)
  | 'Н/НН';

export type HeaderMenu = {
  Диктанты: string[];
  Пунктуация: string[];
  Теория: string[];
  Тренажеры: TrainerSubcategories[];
  Сочинения: string[];
};

export type HeaderCategoryType = keyof HeaderMenu | TrainerSubcategories;

export type HeaderRoutes = {
  [key in HeaderCategoryType]: string;
};

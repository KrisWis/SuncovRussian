export type TrainerSubcategories =
  | 'Ударения'
  | 'Паронимы'
  | 'Тропы'
  | 'Словарные слова'
  | 'Виды союзов'
  | 'Виды подчинительных союзов'
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

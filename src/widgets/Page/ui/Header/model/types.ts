export type TrainerSubcategories =
  | 'Ударения'
  | 'Словарные слова'
  | 'Виды союзов'
  | 'Наречия'
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

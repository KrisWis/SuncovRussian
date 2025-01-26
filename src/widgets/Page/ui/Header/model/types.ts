export type TrainerSubcategories =
  | 'Ударения'
  | 'Словарные слова'
  | 'Виды союзов'
  | 'Наречия'
  | 'Н/НН'
  | 'Пре-При'
  | 'Морфологические нормы';

export type HeaderMenu = {
  Тесты: string[];
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

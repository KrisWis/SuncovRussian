export type TrainerSubcategories =
  | 'Ударения'
  | 'Словарные слова'
  | 'Виды союзов'
  | 'Наречия'
  | 'Н/НН'
  | 'Пре-При'
  | 'Морфологические нормы';

export interface HeaderSubItem {
  subtheme: string;
}

export interface HeaderSubMenu {
  items: HeaderSubItem[];
  theme: string;
}

export type HeaderMenu = {
  Диктанты: HeaderSubMenu[];
  Теория: string[];
  Тренажеры: TrainerSubcategories[];
};

export type HeaderCategoryType = keyof HeaderMenu | TrainerSubcategories;

export type HeaderRoutes = {
  [key in HeaderCategoryType]: string;
};

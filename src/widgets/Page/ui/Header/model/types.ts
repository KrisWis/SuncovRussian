export interface HeaderSubItem {
  subtheme: string;
}

export interface HeaderSubMenu {
  items: HeaderSubItem[];
  theme: string;
}

export type HeaderMenu = {
  Тесты: string[];
  Диктанты: HeaderSubMenu[];
  Теория: string[];
  Тренажеры: string[];
};

export type HeaderCategoryType = keyof HeaderMenu;

export type HeaderRoutes = {
  [key in HeaderCategoryType]: string;
};

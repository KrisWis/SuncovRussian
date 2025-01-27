import { HeaderSubItem, HeaderSubMenu } from '@/widgets/Page';

export interface DictantItem extends HeaderSubItem {
  text: string;
}

export interface DictantType extends HeaderSubMenu {
  items: DictantItem[];
}

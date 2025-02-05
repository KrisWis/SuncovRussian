// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { HeaderSubItem, HeaderSubMenu } from '@/widgets/Page';

export interface DictantItem extends HeaderSubItem {
  text: string;
}

export interface DictantType extends HeaderSubMenu {
  items: DictantItem[];
}

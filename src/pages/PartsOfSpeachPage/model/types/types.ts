import { PartsOfSpeachItemType } from '@/features/PartsOfSpeachItem';

export interface PartsOfSpeachItem {
  items: PartsOfSpeachItemType[];
}

export interface PartsOfSpeachType {
  [key: string]: PartsOfSpeachItem;
}

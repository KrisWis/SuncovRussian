import { PartsOfSpeachItemType } from '../../model/types/types';

interface useContinuePartsOfSpeachItemResult {
  continuePartsOfSpeachItem: () => void;
}

export const useContinuePartsOfSpeachItem = (
  setCurrentItemIndex: React.Dispatch<React.SetStateAction<number>>,
  currentItemIndex: number,
  items: PartsOfSpeachItemType[],
): useContinuePartsOfSpeachItemResult => {
  const continuePartsOfSpeachItem = () => {
    // Увеличиваем индекс текущего элемента (переходим к следующему элементу)
    setCurrentItemIndex(currentItemIndex + 1);

    // Если достигли последнего элемента, то обнуляем индекс
    if (currentItemIndex === items.length - 1) {
      setCurrentItemIndex(0);
    }
  };

  return {
    continuePartsOfSpeachItem,
  };
};

import { PartsOfSpeachItemType } from '../../model/types/types';

interface useContinuePartsOfSpeachItemResult {
  continueFunc: () => void;
}

export const useContinue = (
  setCurrentItemIndex: React.Dispatch<React.SetStateAction<number>>,
  currentItemIndex: number,
  items: PartsOfSpeachItemType[],
  setPassedTestsIndexes: React.Dispatch<React.SetStateAction<number[]>>,
  passedTestsIndexes: number[],
): useContinuePartsOfSpeachItemResult => {
  const continueFunc = () => {
    // Добавляем текущий индекс в массив пройденых тестов
    if (!passedTestsIndexes.includes(currentItemIndex))
      setPassedTestsIndexes([...passedTestsIndexes, currentItemIndex]);

    // Получаем все индексы, которые еще не были пройдены
    const availableIndexes = items
      .map((_, index) => index)
      .filter(
        (index) =>
          !passedTestsIndexes.includes(index) && index !== currentItemIndex,
      );

    // Получаем случайный индекс из доступных
    const randomNextIndex =
      availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

    // Если есть доступные элементы, устанавливаем случайный
    if (availableIndexes.length > 0) {
      setCurrentItemIndex(randomNextIndex);
    } else {
      // Иначе начинаем сначала
      setCurrentItemIndex(0);
      setPassedTestsIndexes([]); // Очищаем историю пройденных тестов
    }
  };

  return {
    continueFunc,
  };
};

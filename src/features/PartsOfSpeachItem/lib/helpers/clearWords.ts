import { deleteClassesFromWord } from './deleteClassesFromWord';

export const clearWords = (
  setMaxCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setTestIsFailed: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedWords: React.Dispatch<React.SetStateAction<number[]>>,
) => {
  // Обнуляем счетчики
  setMaxCorrectAnswersCount(0);
  setCorrectAnswersCount(0);
  setTestIsFailed(false);
  setSelectedWords([]);

  // Получаем все слова
  const PartsOfSpeachItemWords = document.querySelectorAll<HTMLElement>(
    '[data-name="PartsOfSpeachItem__word"]',
  );

  // Удаляем классы со всех слов и обнуляем атрибут data-selected
  PartsOfSpeachItemWords.forEach((word) => {
    deleteClassesFromWord(word);
  });
};

import { deleteClassesFromWord } from './deleteClassesFromWord';

export const clearWords = (
  setMaxCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setTestIsFailed: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  // Обнуляем счетчики
  setMaxCorrectAnswersCount(0);
  setCorrectAnswersCount(0);
  setTestIsFailed(false);

  // Получаем все слова
  const PartsOfSpeachItemWords = document.querySelectorAll<HTMLElement>(
    '[data-name="PartsOfSpeachItem__word"]',
  );

  // Удаляем классы со всех слов и обнуляем атрибут data-selected
  PartsOfSpeachItemWords.forEach((word) => {
    deleteClassesFromWord(word);
    word.setAttribute('data-selected', 'false');
  });
};

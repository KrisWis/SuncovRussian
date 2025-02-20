import * as styles from '../TrainerChoiceWords.module.scss';

export const clearClassesOnWord = () => {
  // Проходимся по каждому слову для выбора
  const TrainerChoiceWordsChoiceWords = document.querySelectorAll(
    '[data-name="TrainerChoiceWords_choiceWord"]',
  );

  // Удаляем все возможные классы
  TrainerChoiceWordsChoiceWords.forEach((choiceWordElem) => {
    choiceWordElem.classList.remove(
      styles.TrainerChoiceWords__choiceWord__selected,
    );

    choiceWordElem.classList.remove(
      styles.TrainerChoiceWords__choiceWord__inactive,
    );
  });
};

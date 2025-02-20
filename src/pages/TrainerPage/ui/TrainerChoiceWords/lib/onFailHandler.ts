import { WordsForTrainersTypes } from '../../../model/types/types';
import { wordActionsFunctionType } from '../../../lib/hooks/useWordActions';
import { ChoiceWordInterface } from '../../../model/types/choice';
import * as styles from '../TrainerChoiceWords.module.scss';

// Модификация действия при ошибке конкретно для этого тренажера
export const onFailHandler = (
  e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  randomWord: ChoiceWordInterface,
  wordOnFail: wordActionsFunctionType,
  storeWords: WordsForTrainersTypes[],
  isErrorWork: boolean,
) => {
  // Проходимся по каждому слову для выбора
  const TrainerChoiceWordsChoiceWords = document.querySelectorAll(
    '[data-name="TrainerChoiceWords_choiceWord"]',
  );

  TrainerChoiceWordsChoiceWords.forEach((choiceWordElem) => {
    // Получаем значение этого слова
    const choiceWordValue = choiceWordElem.getAttribute('data-value');

    // Если слово неправильное, то помечаем его соответствующе
    if (choiceWordValue !== randomWord.choiceWord) {
      // А если слово ещё и нажато было, то выделяем другим классом
      if (e.target === choiceWordElem) {
        choiceWordElem.classList.add(
          styles.TrainerChoiceWords__choiceWord__selected,
        );
      }

      choiceWordElem.classList.add(
        styles.TrainerChoiceWords__choiceWord__inactive,
      );
    }
  });

  wordOnFail(storeWords, isErrorWork, randomWord.id);
};

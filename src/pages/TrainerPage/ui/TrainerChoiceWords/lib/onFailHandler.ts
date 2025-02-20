import { WordsForTrainersTypes } from '../../../model/types/types';
import { wordOnFailType } from '../../../lib/hooks/useWordActions';
import { ChoiceWordInterface } from '../../../model/types/choice';
import * as styles from '../TrainerChoiceWords.module.scss';

export type onFailHandlerParams = (
  e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  randomWord: ChoiceWordInterface,
  wordOnFail: wordOnFailType,
  storeWords: WordsForTrainersTypes[],
  isErrorWork: boolean,
) => void;

// Модификация действия при ошибке конкретно для этого тренажера
export const onFailHandler: onFailHandlerParams = (
  e,
  randomWord,
  wordOnFail,
  storeWords,
  isErrorWork,
): void => {
  // Проходимся по каждому слову для выбора
  const TrainerChoiceWordsChoiceWords = document.querySelectorAll<HTMLElement>(
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

  // Получаем правильное слово
  const correctChoiceWordElem = Array.from(TrainerChoiceWordsChoiceWords).find(
    (choiceWordElem) =>
      choiceWordElem.getAttribute('data-value') === randomWord.choiceWord,
  );

  wordOnFail(storeWords, isErrorWork, randomWord.id, correctChoiceWordElem);
};

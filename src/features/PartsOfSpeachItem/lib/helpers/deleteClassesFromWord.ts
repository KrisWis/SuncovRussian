import * as styles from '../../ui/PartsOfSpeachItem.module.scss';

export const deleteClassesFromWord = (word: HTMLElement) => {
  word.classList.remove(
    ...[
      styles.PartsOfSpeachItem__word__error,
      styles.PartsOfSpeachItem__word__selected,
    ],
  );
};

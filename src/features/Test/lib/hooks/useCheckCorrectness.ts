import * as styles from '../../ui/Test.module.scss';
import { CheckButtonOnClickResult } from '@/shared/ui/TemplateForTests';
import { Question } from '../../model/types/types';

interface useCheckTestCorrectnessResult {
  checkCorrectness: () => CheckButtonOnClickResult;
}

export const useCheckCorrectness = (
  questions: Question[],
  setMaxCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setTestIsFailed: React.Dispatch<React.SetStateAction<boolean>>,
  setTestHasMissedAnswers: React.Dispatch<React.SetStateAction<boolean>>,
): useCheckTestCorrectnessResult => {
  const checkCorrectness = (): CheckButtonOnClickResult => {
    // Получаем нужные все тесты-элементы (вопросы)
    const allQuestions = document.querySelectorAll(
      '[data-name="Test"]',
    ) as NodeListOf<HTMLInputElement>;

    // Проверяем есть ли в тестах хотя-бы один вопрос с пропущенным ответом
    const isMinOneTestMissed = Array.from(allQuestions).some((question) => {
      const testRadioButtons = question.querySelectorAll(
        '[data-name="Test__radioButton"]',
      );

      return Array.from(testRadioButtons).every(
        (radioButton) => !(radioButton as HTMLInputElement).checked,
      );
    });

    // Устанавливаем счетчик правильных ответов и то, есть ли хотя бы один неправильный тест
    let correctAnswersCount: number = 0;
    let minOneTestIsFailed: boolean = false;

    for (let i = 0; i < allQuestions.length; i++) {
      // Получаем тест и его радио-кнопки
      const questionElement = allQuestions[i];
      const questionRadioButtons = questionElement.querySelectorAll(
        '[data-name="Test__radioButton"]',
      );

      // Получаем элемент фона
      const bgElem = questionElement.querySelector(
        '[data-name="Test__bg"]',
      ) as HTMLDivElement;

      // Получаем сами значения теста
      const testValues = questions[i];

      // Проверяем, что в тесте есть хотя-бы одна нажатая кнопка (если тест имеет один ответ), а если имеет несколько, то чтобы было нажато более одной
      const checkedRadioButtonIndexes: number[] = Array.from(
        questionRadioButtons,
      )
        .filter((radioButton) => (radioButton as HTMLInputElement).checked)
        .map((radioButton) =>
          Number((radioButton as HTMLInputElement).getAttribute('data-index')),
        );

      if (checkedRadioButtonIndexes.length === 0) {
        bgElem.classList.add(styles.Test__bg__active);
        continue;
      }

      // Если ни один тест не пропущен, то проверяем правильность ответа
      if (!isMinOneTestMissed) {
        let testIsCorrect: boolean;
        // Проверяем, правильный ли выбран ответ (при условии, что тест имеет один ответ)

        if (testValues.has_one_correct_answer) {
          const correctAnswerIndex = testValues.answers.findIndex(
            (item) => item.is_correct,
          );

          testIsCorrect = correctAnswerIndex === checkedRadioButtonIndexes[0];
        } else {
          // Если тест имеет несколько ответов
          const correctAnswerIndexes = testValues.answers
            .map((item, index) => (item.is_correct ? index : -1))
            .filter((index) => index !== -1);

          testIsCorrect =
            JSON.stringify(checkedRadioButtonIndexes.sort()) ===
            JSON.stringify(correctAnswerIndexes.sort());
        }

        // В зависимости от того, правильный или нет, делаем соответствующие действия
        if (testIsCorrect) {
          correctAnswersCount += 1;
        } else {
          minOneTestIsFailed = true;
          bgElem.classList.add(styles.Test__bg__incorrect);
        }
      }
    }

    // Обновляем стейты
    setMaxCorrectAnswersCount(allQuestions.length);
    setCorrectAnswersCount(correctAnswersCount);
    setTestIsFailed(minOneTestIsFailed);
    setTestHasMissedAnswers(isMinOneTestMissed);

    // Возвращаем значения
    return {
      testIsFailed: minOneTestIsFailed,
      testHasMissedAnswers: isMinOneTestMissed,
    };
  };

  return {
    checkCorrectness,
  };
};

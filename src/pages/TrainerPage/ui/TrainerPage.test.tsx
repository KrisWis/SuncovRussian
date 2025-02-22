import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import {
  cleanup,
  queries,
  RenderResult,
  waitFor,
} from '@testing-library/react';
import { TrainerPage } from './TrainerPage';
import { getRouteTrainer } from '@/shared/const/router';
import { wordsForTrainers } from '../model/static/wordsForTrainers';
import { UnionsWordsInterface, unionTypes } from '../model/types/unions';
import userEvent from '@testing-library/user-event';
import {
  ChoiceWordInterface,
  ChoiceWordsForTrainersItem,
} from '../model/types/choice';

// Types
type ComparisonType = 'equal' | 'greaterThan';

type WordsTestIDs =
  | 'TrainerPrimaryWords__valid'
  | 'TrainerPrimaryWords__invalid'
  | 'TrainerUnionsWords__Подчинительный'
  | 'TrainerUnionsWords__Сочинительный';

type ModeTypes = 'Одна жизнь' | 'Проверка';

// Helpers

// Функция для проверки значения прогресс бара
const checkProgressBarValue = async (
  expectedValue: number,
  component: RenderResult<typeof queries, HTMLElement, HTMLElement>,
  comparisonType: ComparisonType = 'equal',
) => {
  await waitFor(() => {
    const progressBar = component.getByTestId(
      'Trainer__TrainerProgressBar__percent',
    );

    if (comparisonType === 'equal') {
      expect(Number(progressBar.getAttribute('value'))).toBe(expectedValue);
    } else if (comparisonType === 'greaterThan') {
      expect(Number(progressBar.getAttribute('value'))).toBeGreaterThan(
        expectedValue,
      );
    }
  });
};

// Функция для имитации клика на слова и проверки появления плашки "Неверно"
const clickWordAndCheckUncorrectBar = async (
  elementTestID: WordsTestIDs,
  isUncorrectIsExpected: boolean,
  component: RenderResult<typeof queries, HTMLElement, HTMLElement>,
) => {
  await waitFor(async () => {
    const element = component.getByTestId(elementTestID);

    expect(element).toBeInTheDocument();

    await userEvent.click(element);

    // Проверяем, появилась ли плашка "Неверно" или нет
    if (isUncorrectIsExpected) {
      expect(component.queryByTestId('Trainer__uncorrect')).toBeInTheDocument();
    } else {
      expect(
        component.queryByTestId('Trainer__uncorrect'),
      ).not.toBeInTheDocument();
    }

    // Убираем плашку
    await userEvent.click(document.body);
  });
};

// Tests
describe('TrainerPrimaryWords', () => {
  // Helpers
  const theme: string = 'Ударения';
  const setupTest = () => {
    return renderWithProviders(
      <TrainerPage theme={theme} words={wordsForTrainers[theme]} />,
      getRouteTrainer('udareniya'),
    );
  };

  // BeforeEach
  let component: RenderResult<typeof queries, HTMLElement, HTMLElement>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest();
    });
  });

  // Tests
  test('Click valid words and not get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Кликаем на правильные слова
      await clickWordAndCheckUncorrectBar(
        'TrainerPrimaryWords__valid',
        false,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        'TrainerPrimaryWords__valid',
        false,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        'TrainerPrimaryWords__valid',
        false,
        component,
      );

      // Прогресс бар должен увеличиться
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid word and valid word and get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Кликаем на правильное слово
      await clickWordAndCheckUncorrectBar(
        'TrainerPrimaryWords__valid',
        false,
        component,
      );

      // Кликаем на неправильное слово
      await clickWordAndCheckUncorrectBar(
        'TrainerPrimaryWords__invalid',
        true,
        component,
      );

      // Прогресс бар должен увеличиться, потому что правильное слово было кликнуто
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid words, check progress bar', async () => {
    // Кликаем на неправильные слова
    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    // Прогресс бар должен быть равен нулю
    await checkProgressBarValue(0, component);
  });

  afterEach(() => {
    cleanup();
  });
});

describe('TrainerModeSwitcher', () => {
  // Helpers
  const theme: string = 'Ударения';
  const setupTest = () => {
    return renderWithProviders(
      <TrainerPage theme={theme} words={wordsForTrainers[theme]} />,
      getRouteTrainer('udareniya'),
    );
  };

  const clickMode = async (mode: ModeTypes) => {
    const modeItem = component.getByTestId(`ModeSwitcherItem__${mode}`);

    await userEvent.click(modeItem);

    // Проверяем, что режим выбран
    expect(modeItem).toHaveAttribute('data-selected', 'true');
  };

  // BeforeEach
  let component: RenderResult<typeof queries, HTMLElement, HTMLElement>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest();
    });
  });

  // Tests
  test('Click one life mode, check progress bar', async () => {
    // Выбираем режим "Одна жизнь"
    await clickMode('Одна жизнь');

    // Кликаем на правильные слова
    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__valid',
      false,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__valid',
      false,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__valid',
      false,
      component,
    );

    // Кликаем на неправильное слово
    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    // Прогресс бар должен быть равен нулю
    await checkProgressBarValue(0, component);
  });

  test('Click check mode, check progress bar', async () => {
    // Выбираем режим "Проверка"
    await clickMode('Проверка');

    // Кликаем на неправильные слова
    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'TrainerPrimaryWords__invalid',
      true,
      component,
    );

    // Прогресс бар должен увеличиться
    await checkProgressBarValue(0, component, 'greaterThan');
  });

  afterEach(() => {
    cleanup();
  });
});

describe('TrainerChoiceWords', () => {
  // Helpers
  const theme: string = 'разряды союзов';
  const setupTest = () => {
    return renderWithProviders(
      <TrainerPage theme={theme} words={wordsForTrainers[theme]} />,
      getRouteTrainer('podvidy-soyuzov'),
    );
  };

  // Функция для получения текущего слова и его значений
  const getCurrentWord = (): ChoiceWordInterface => {
    // Получаем текущее слово и его значения
    const TrainerChoiceWordsWord = component.getByTestId(
      'TrainerChoiceWords_word',
    );

    const currentWordValues = (
      wordsForTrainers[theme] as ChoiceWordsForTrainersItem
    ).items.find((item) => item.word === TrainerChoiceWordsWord.textContent)!;

    return currentWordValues;
  };

  // Функция для клика на слово
  const clickChoiceWord = async (
    currentWordValues: ChoiceWordInterface,
    correct: boolean,
  ) => {
    // Получаем все варианты ответа
    const TrainerChoiceWordsChoiceWords = component.getAllByTestId(
      'TrainerChoiceWords_choiceWord',
    );

    // Получаем и кликаем на вариант ответа
    const trainerChoiceWordsChoiceWord = TrainerChoiceWordsChoiceWords.find(
      (choiceWord) =>
        correct
          ? choiceWord.textContent === currentWordValues.choiceWord
          : choiceWord.textContent !== currentWordValues.choiceWord,
    )!;

    // Кликаем на вариант ответа
    await userEvent.click(trainerChoiceWordsChoiceWord);
  };

  // BeforeEach
  let component: ReturnType<typeof setupTest>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest();
    });
  });

  // Tests
  test('Click valid choiceWord and not get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем текущее слово и его значения
      const currentWordValues = getCurrentWord();

      // Кликаем на правильный вариант ответа
      await clickChoiceWord(currentWordValues, true);

      // Прогресс бар должен увеличиться
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid choiceWord and valid choiceWord and get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем текущее слово и его значения
      const currentWordValues = getCurrentWord();

      // Кликаем на правильный вариант ответа
      await clickChoiceWord(currentWordValues, true);

      // Кликаем на неправильный вариант ответа
      await clickChoiceWord(currentWordValues, false);

      // Прогресс бар должен увеличиться, потому что правильный вариант ответа был кликнут
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid choiceWord, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем текущее слово и его значения
      const currentWordValues = getCurrentWord();

      // Кликаем на неправильный вариант ответа
      await clickChoiceWord(currentWordValues, false);

      // Прогресс бар должен быть равен нулю
      await checkProgressBarValue(0, component);
    });
  });
});

describe('TrainerUnionsWords', () => {
  // Helpers
  const theme: string = 'Виды союзов';
  const setupTest = () => {
    return renderWithProviders(
      <TrainerPage theme={theme} words={wordsForTrainers[theme]} />,
      getRouteTrainer('vidy-soyuzov'),
    );
  };

  // Функция для получения типа текущего слова
  const getTypeOfCurrentWord = (): unionTypes => {
    const word = component.getByTestId('TrainerUnionsWords__word');

    expect(word).toBeInTheDocument();

    const currentWord = (word as HTMLElement).textContent;

    const wordCurrentType = (
      wordsForTrainers['Виды союзов'].items as UnionsWordsInterface[]
    ).find((word) => word.word === currentWord)!.unionType;

    return wordCurrentType;
  };

  // BeforeEach
  let component: ReturnType<typeof setupTest>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest();
    });
  });

  // Tests
  test('Click valid words and not get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем тип текущего слова
      const wordCurrentType = getTypeOfCurrentWord();

      // Кликаем на правильные слова
      await clickWordAndCheckUncorrectBar(
        `TrainerUnionsWords__${wordCurrentType}`,
        false,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        `TrainerUnionsWords__${wordCurrentType}`,
        false,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        `TrainerUnionsWords__${wordCurrentType}`,
        false,
        component,
      );

      // Прогресс бар должен увеличиться
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid word and valid word and get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Получаем тип текущего слова
      const wordCurrentType = getTypeOfCurrentWord();

      // Кликаем на правильное слово
      await clickWordAndCheckUncorrectBar(
        `TrainerUnionsWords__${wordCurrentType}`,
        false,
        component,
      );

      // Получаем противоположный тип текущего слова
      const wordOppositeType: unionTypes =
        wordCurrentType === 'Подчинительный'
          ? 'Сочинительный'
          : 'Подчинительный';

      // Кликаем на неправильное слово
      await clickWordAndCheckUncorrectBar(
        `TrainerUnionsWords__${wordOppositeType}`,
        true,
        component,
      );

      // Прогресс бар должен увеличиться, потому что правильное слово было кликнуто
      await checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid word, check progress bar', async () => {
    // Получаем тип текущего слова
    const wordCurrentType = getTypeOfCurrentWord();

    // Получаем противоположный тип текущего слова
    const wordOppositeType: unionTypes =
      wordCurrentType === 'Подчинительный' ? 'Сочинительный' : 'Подчинительный';

    // Кликаем на неправильное слово
    await clickWordAndCheckUncorrectBar(
      `TrainerUnionsWords__${wordOppositeType}`,
      true,
      component,
    );

    // Прогресс бар должен быть равен нулю
    await checkProgressBarValue(0, component);
  });

  afterEach(() => {
    cleanup();
  });
});

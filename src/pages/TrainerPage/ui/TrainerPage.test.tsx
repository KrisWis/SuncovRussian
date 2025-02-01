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

// Types
type ComparisonType = 'equal' | 'greaterThan';

type WordsTestIDs =
  | 'PrimaryTrainerWords__valid'
  | 'PrimaryTrainerWords__invalid'
  | 'UnionsTrainerWords__Подчинительный'
  | 'UnionsTrainerWords__Сочинительный';

type ModeTypes = 'Одна жизнь' | 'Проверка';

// Helpers

// Функция для проверки значения прогресс бара
const checkProgressBarValue = (
  expectedValue: number,
  component: RenderResult<typeof queries, HTMLElement, HTMLElement>,
  comparisonType: ComparisonType = 'equal',
) => {
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

    if (isUncorrectIsExpected) {
      expect(component.queryByTestId('Trainer__uncorrect')).toBeInTheDocument();
    } else {
      expect(
        component.queryByTestId('Trainer__uncorrect'),
      ).not.toBeInTheDocument();
    }
  });
};

// Tests
describe('TrainerModeSwitcher', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <TrainerPage theme="Ударения" words={wordsForTrainers['Ударения']} />,
      getRouteTrainer('udareniya'),
    );
  };

  const clickMode = async (mode: ModeTypes) => {
    const modeItem = component.getByTestId(`ModeSwitcherItem__${mode}`);

    await userEvent.click(modeItem);

    // Проверяем, что режим действительно выбран
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
      'PrimaryTrainerWords__valid',
      false,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__valid',
      false,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__valid',
      false,
      component,
    );

    // Но один раз кликаем на неправильное
    await clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    // И прогресс бар должен обнулиться
    checkProgressBarValue(0, component);
  });

  test('Click check mode, check progress bar', async () => {
    // Выбираем режим "Проверка"
    await clickMode('Проверка');

    // Кликаем на неправильные слова
    await clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    // И прогресс бар должен быть больше 0
    checkProgressBarValue(0, component, 'greaterThan');
  });

  afterEach(() => {
    cleanup();
  });
});

describe('PrimaryTrainerWords', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <TrainerPage theme="Ударения" words={wordsForTrainers['Ударения']} />,
      getRouteTrainer('udareniya'),
    );
  };

  let component: RenderResult<typeof queries, HTMLElement, HTMLElement>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest();
    });
  });

  // Tests
  test('Click valid words and not get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Click valid words
      await clickWordAndCheckUncorrectBar(
        'PrimaryTrainerWords__valid',
        false,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        'PrimaryTrainerWords__valid',
        false,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        'PrimaryTrainerWords__valid',
        false,
        component,
      );

      // Progress bar value must increase
      checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid word and valid word and get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Click valid word
      await clickWordAndCheckUncorrectBar(
        'PrimaryTrainerWords__valid',
        false,
        component,
      );

      // Click invalid word
      await clickWordAndCheckUncorrectBar(
        'PrimaryTrainerWords__invalid',
        true,
        component,
      );

      // Progress bar value must increase, because valid word was clicked
      checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid words, check progress bar', async () => {
    // Click invalid words
    await clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    await clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    // Progress bar value must be equal zero
    checkProgressBarValue(0, component);
  });

  afterEach(() => {
    cleanup();
  });
});

describe('UnionsTrainerWords', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <TrainerPage
        theme="Виды союзов"
        words={wordsForTrainers['Виды союзов']}
      />,
      getRouteTrainer('vidy-soyuzov'),
    );
  };

  let component: ReturnType<typeof setupTest>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest();
    });
  });

  const getTypeOfCurrentWord = (): unionTypes => {
    const word = component.getByTestId('UnionsTrainerWords__word');

    expect(word).toBeInTheDocument();

    const currentWord = (word as HTMLElement).textContent;

    const wordCurrentType = (
      wordsForTrainers['Виды союзов'].items as UnionsWordsInterface[]
    ).find((word) => word.word === currentWord)!.unionType;

    return wordCurrentType;
  };

  // Tests
  test('Click invalid words, check progress bar', async () => {
    await waitFor(async () => {
      // Get type of current word
      const wordCurrentType = getTypeOfCurrentWord();

      // Get opposite type of current word
      const wordOppositeType: unionTypes =
        wordCurrentType === 'Подчинительный'
          ? 'Сочинительный'
          : 'Подчинительный';

      // Click invalid words
      await clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordOppositeType}`,
        true,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordOppositeType}`,
        true,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordOppositeType}`,
        true,
        component,
      );

      // Progress bar value must be equal zero
      checkProgressBarValue(0, component);
    });
  });

  test('Click valid words and not get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Get type of current word
      const wordCurrentType = getTypeOfCurrentWord();

      // Click valid words
      await clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordCurrentType}`,
        false,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordCurrentType}`,
        false,
        component,
      );

      await clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordCurrentType}`,
        false,
        component,
      );

      // Progress bar value must increase
      checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid word and valid word and get an error, check progress bar', async () => {
    await waitFor(async () => {
      // Get type of current word
      const wordCurrentType = getTypeOfCurrentWord();

      // Click valid word
      await clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordCurrentType}`,
        false,
        component,
      );

      // Get opposite type of current word
      const wordOppositeType: unionTypes =
        wordCurrentType === 'Подчинительный'
          ? 'Сочинительный'
          : 'Подчинительный';

      // Click invalid word
      await clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordOppositeType}`,
        true,
        component,
      );

      // Progress bar value must increase, because valid word was clicked
      checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  afterEach(() => {
    cleanup();
  });
});

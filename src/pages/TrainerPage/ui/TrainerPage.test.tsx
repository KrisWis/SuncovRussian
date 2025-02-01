import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import {
  cleanup,
  fireEvent,
  queries,
  RenderResult,
  waitFor,
} from '@testing-library/react';
import { TrainerPage } from './TrainerPage';
import { getRouteTrainer } from '@/shared/const/router';
import { wordsForTrainers } from '../model/static/wordsForTrainers';
import { UnionsWordsInterface, unionTypes } from '../model/types/unions';

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
const clickWordAndCheckUncorrectBar = (
  elementTestID: WordsTestIDs,
  isUncorrectIsExpected: boolean,
  component: RenderResult<typeof queries, HTMLElement, HTMLElement>,
) => {
  const element = component.getByTestId(elementTestID);

  expect(element).toBeInTheDocument();

  fireEvent.click(element);

  if (isUncorrectIsExpected) {
    expect(component.queryByTestId('Trainer__uncorrect')).toBeInTheDocument();
  } else {
    expect(
      component.queryByTestId('Trainer__uncorrect'),
    ).not.toBeInTheDocument();
  }
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

  const clickMode = (mode: ModeTypes) => {
    const modeItem = component.getByTestId(`ModeSwitcherItem__${mode}`);

    fireEvent.click(modeItem);

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
  test('Click one life mode, check progress bar', () => {
    // Выбираем режим "Одна жизнь"
    clickMode('Одна жизнь');

    // Кликаем на правильные слова
    clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__valid',
      false,
      component,
    );

    clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__valid',
      false,
      component,
    );

    clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__valid',
      false,
      component,
    );

    // Но один раз кликаем на неправильное
    clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    // И прогресс бар должен обнулиться
    checkProgressBarValue(0, component);
  });

  test('Click check mode, check progress bar', () => {
    // Выбираем режим "Проверка"
    clickMode('Проверка');

    // Кликаем на неправильные слова
    // TODO: убрать этот valid и чтобы работало и чекнуть почему тест иногда не срабатывает
    clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__valid',
      false,
      component,
    );

    clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    // И прогресс бар должен быть не равен 0
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
    await waitFor(() => {
      // Click valid words
      clickWordAndCheckUncorrectBar(
        'PrimaryTrainerWords__valid',
        false,
        component,
      );

      clickWordAndCheckUncorrectBar(
        'PrimaryTrainerWords__valid',
        false,
        component,
      );

      clickWordAndCheckUncorrectBar(
        'PrimaryTrainerWords__valid',
        false,
        component,
      );

      // Progress bar value must increase
      checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid word and valid word and get an error, check progress bar', async () => {
    await waitFor(() => {
      // Click valid word
      clickWordAndCheckUncorrectBar(
        'PrimaryTrainerWords__valid',
        false,
        component,
      );

      // Click invalid word
      clickWordAndCheckUncorrectBar(
        'PrimaryTrainerWords__invalid',
        true,
        component,
      );

      // Progress bar value must increase, because valid word was clicked
      checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid words, check progress bar', () => {
    // Click invalid words
    clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    clickWordAndCheckUncorrectBar(
      'PrimaryTrainerWords__invalid',
      true,
      component,
    );

    clickWordAndCheckUncorrectBar(
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
    await waitFor(() => {
      // Get type of current word
      const wordCurrentType = getTypeOfCurrentWord();

      // Get opposite type of current word
      const wordOppositeType: unionTypes =
        wordCurrentType === 'Подчинительный'
          ? 'Сочинительный'
          : 'Подчинительный';

      // Click invalid words
      clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordOppositeType}`,
        true,
        component,
      );

      clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordOppositeType}`,
        true,
        component,
      );

      clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordOppositeType}`,
        true,
        component,
      );

      // Progress bar value must be equal zero
      checkProgressBarValue(0, component);
    });
  });

  test('Click valid words and not get an error, check progress bar', async () => {
    await waitFor(() => {
      // Get type of current word
      const wordCurrentType = getTypeOfCurrentWord();

      // Click valid words
      clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordCurrentType}`,
        false,
        component,
      );

      clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordCurrentType}`,
        false,
        component,
      );

      clickWordAndCheckUncorrectBar(
        `UnionsTrainerWords__${wordCurrentType}`,
        false,
        component,
      );

      // Progress bar value must increase
      checkProgressBarValue(0, component, 'greaterThan');
    });
  });

  test('Click invalid word and valid word and get an error, check progress bar', async () => {
    await waitFor(() => {
      // Get type of current word
      const wordCurrentType = getTypeOfCurrentWord();

      // Click valid word
      clickWordAndCheckUncorrectBar(
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
      clickWordAndCheckUncorrectBar(
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

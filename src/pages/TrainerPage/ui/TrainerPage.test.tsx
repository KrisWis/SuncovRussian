import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import {
  cleanup,
  fireEvent,
  queries,
  RenderResult,
  waitFor,
} from '@testing-library/react';
import {
  unionTypes,
  wordsForUnionsTests,
} from '../model/static/wordsForUnionsTests';
import { TrainerPage } from './TrainerPage';
import { wordsForAccentsTests } from '../model/static/wordsForAccentsTests';
import { getRouteTrainer } from '@/shared/const/router';

// Types
type ComparisonType = 'equal' | 'greaterThan';

type WordsTestIDs =
  | 'PrimaryTrainerWords__valid'
  | 'PrimaryTrainerWords__invalid'
  | 'UnionsTrainerWords__Подчинительный'
  | 'UnionsTrainerWords__Сочинительный';

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
  const valid = component.getByTestId(elementTestID);

  expect(valid).toBeInTheDocument();

  fireEvent.click(valid);

  if (isUncorrectIsExpected) {
    expect(component.queryByTestId('Trainer__uncorrect')).toBeInTheDocument();
  } else {
    expect(
      component.queryByTestId('Trainer__uncorrect'),
    ).not.toBeInTheDocument();
  }
};

// Функция для очистки DOM и прогресса после каждого теста
const afterEachClear = async (
  setupTest: () => RenderResult<typeof queries, HTMLElement, HTMLElement>,
) => {
  const { getByTestId } = setupTest();

  await waitFor(() => {
    const TrainerStrictModeSwitcher = getByTestId(
      'Trainer__StrictModeSwitcher',
    );

    fireEvent.click(TrainerStrictModeSwitcher);

    fireEvent.click(TrainerStrictModeSwitcher);
  });
};

// Tests
describe('PrimaryTrainerWords', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <TrainerPage words={wordsForAccentsTests} />,
      getRouteTrainer('accents'),
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

  afterEach(async () => {
    cleanup();
    await afterEachClear(setupTest);
  });
});

describe('UnionsTrainerWords', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <TrainerPage words={wordsForUnionsTests} />,
      getRouteTrainer('unions'),
    );
  };

  let component: ReturnType<typeof setupTest>;

  beforeEach(() => {
    cleanup();
    component = setupTest();
  });

  const getTypeOfCurrentWord = (): unionTypes => {
    const word = component.getByTestId('UnionsTrainerWords__word');

    expect(word).toBeInTheDocument();

    const currentWord = (word as HTMLElement).textContent;

    const wordCurrentType = wordsForUnionsTests.find(
      (word) => word.word === currentWord,
    )!.unionType;

    return wordCurrentType;
  };

  // Tests
  test('Check render', async () => {
    // Костыль для полного рендера элемента
    await waitFor(() => {});
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

  afterEach(async () => {
    cleanup();
    await afterEachClear(setupTest);
  });
});

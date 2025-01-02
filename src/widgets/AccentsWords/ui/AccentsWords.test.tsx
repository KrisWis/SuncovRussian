import { AccentsWords } from './AccentsWords';
import { accentsWords } from '@/shared/assets/static/accentsWords';
import { renderWithRouter } from '@/shared/tests/renderWithRouter';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';

type ComparisonType = 'equal' | 'greaterThan';

type WordsTestIDs = 'AccentsWords__valid' | 'AccentsWords__invalid';

describe('AccentsWords', () => {
  // Helpers
  const setupTest = () => {
    return renderWithRouter(<AccentsWords words={accentsWords} />);
  };

  let component: ReturnType<typeof setupTest>;

  beforeEach(() => {
    component = setupTest();
  });

  const checkProgressBarValue = (
    expectedValue: number,
    comparisonType: ComparisonType = 'equal',
  ) => {
    const progressBar = component.getByTestId(
      'AccentsWords__AccentsProgressBar__percent',
    );

    if (comparisonType === 'equal') {
      expect(Number(progressBar.getAttribute('value'))).toBe(expectedValue);
    } else if (comparisonType === 'greaterThan') {
      expect(Number(progressBar.getAttribute('value'))).toBeGreaterThan(
        expectedValue,
      );
    }
  };

  const clickWordAndCheckUncorrectBar = (
    elementTestID: WordsTestIDs,
    isUncorrectIsExpected: boolean,
  ) => {
    const valid = component.getByTestId(elementTestID);

    expect(valid).toBeInTheDocument();

    fireEvent.click(valid);

    if (isUncorrectIsExpected) {
      expect(
        component.queryByTestId('AccentsWords__uncorrect'),
      ).toBeInTheDocument();
    } else {
      expect(
        component.queryByTestId('AccentsWords__uncorrect'),
      ).not.toBeInTheDocument();
    }
  };

  // Tests
  test('Click valid words and not get an error, check progress bar', async () => {
    await waitFor(() => {
      // Check progress bar value equal zero
      checkProgressBarValue(0);

      // Click valid words
      clickWordAndCheckUncorrectBar('AccentsWords__valid', false);

      clickWordAndCheckUncorrectBar('AccentsWords__valid', false);

      clickWordAndCheckUncorrectBar('AccentsWords__valid', false);

      // Progress bar value must increase
      checkProgressBarValue(0, 'greaterThan');
    });
  });

  test('Click invalid word and valid word and get an error, check progress bar', async () => {
    await waitFor(() => {
      // Check progress bar value equal zero
      checkProgressBarValue(0);

      // Click valid word
      clickWordAndCheckUncorrectBar('AccentsWords__valid', false);

      // Click invalid word
      clickWordAndCheckUncorrectBar('AccentsWords__invalid', true);

      // Progress bar value must increase, because valid word was clicked
      checkProgressBarValue(0, 'greaterThan');
    });
  });

  test('Click invalid words, check progress bar', () => {
    // Progress bar value must be equal zero
    checkProgressBarValue(0);

    // Click invalid words
    clickWordAndCheckUncorrectBar('AccentsWords__invalid', true);

    clickWordAndCheckUncorrectBar('AccentsWords__invalid', true);

    clickWordAndCheckUncorrectBar('AccentsWords__invalid', true);

    // Progress bar value must be equal zero
    checkProgressBarValue(0);
  });

  afterEach(() => {
    cleanup();

    const { getByTestId } = setupTest();

    const AccentsWordsStrictModeSwitcher = getByTestId(
      'AccentsWords__StrictModeSwitcher',
    );

    fireEvent.click(AccentsWordsStrictModeSwitcher);

    fireEvent.click(AccentsWordsStrictModeSwitcher);
  });
});

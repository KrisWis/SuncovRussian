import { TestsWords } from './TestsWords';
import { accentsTestsWords } from '@/shared/static/tests_words/accents';
import { renderWithRouter } from '@/shared/utils/renderWithRouter';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';

describe('TestsWords', () => {
  test('Click valid words and not get an error, check progress bar', async () => {
    const { getByTestId, queryByTestId } = renderWithRouter(
      <TestsWords words={accentsTestsWords} />,
    );

    await waitFor(() => {
      // Check progress bar value equal zero
      const TestWordsTestsProgressBarPercent = getByTestId(
        'TestWords__TestsProgressBar__percent',
      );

      expect(
        Number(TestWordsTestsProgressBarPercent.getAttribute('value')),
      ).toBe(0);

      // Click valid words
      const valid = getByTestId('TestsWords__valid');

      expect(valid).toBeInTheDocument();

      fireEvent.click(valid);

      expect(queryByTestId('TestsWords__uncorrect')).not.toBeInTheDocument();

      fireEvent.click(valid);

      expect(queryByTestId('TestsWords__uncorrect')).not.toBeInTheDocument();

      fireEvent.click(valid);

      expect(queryByTestId('TestsWords__uncorrect')).not.toBeInTheDocument();

      // Progress bar value must increase
      expect(
        Number(TestWordsTestsProgressBarPercent.getAttribute('value')),
      ).toBeGreaterThan(0);
    });
  });

  test('Click invalid word and valid word and get an error, check progress bar', async () => {
    const { getByTestId, queryByTestId } = renderWithRouter(
      <TestsWords words={accentsTestsWords} />,
    );

    await waitFor(() => {
      // Check progress bar value equal zero
      const TestWordsTestsProgressBarPercent = getByTestId(
        'TestWords__TestsProgressBar__percent',
      );

      expect(
        Number(TestWordsTestsProgressBarPercent.getAttribute('value')),
      ).toBe(0);

      // Click valid word
      const valid = getByTestId('TestsWords__valid');

      expect(valid).toBeInTheDocument();

      fireEvent.click(valid);

      expect(queryByTestId('TestsWords__uncorrect')).not.toBeInTheDocument();

      // Click invalid word
      const invalid = getByTestId('TestsWords__invalid');

      expect(invalid).toBeInTheDocument();

      fireEvent.click(invalid);

      expect(queryByTestId('TestsWords__uncorrect')).toBeInTheDocument();

      // Progress bar value must increase, because valid word was clicked
      expect(
        Number(TestWordsTestsProgressBarPercent.getAttribute('value')),
      ).toBeGreaterThan(0);
    });
  });

  test('Click invalid words, check progress bar', () => {
    const { getByTestId, queryByTestId } = renderWithRouter(
      <TestsWords words={accentsTestsWords} />,
    );

    // Progress bar value must be equal zero
    const TestWordsTestsProgressBarPercent = getByTestId(
      'TestWords__TestsProgressBar__percent',
    );

    expect(Number(TestWordsTestsProgressBarPercent.getAttribute('value'))).toBe(
      0,
    );

    // Click invalid words
    const invalid = getByTestId('TestsWords__invalid');

    expect(invalid).toBeInTheDocument();

    fireEvent.click(invalid);

    expect(queryByTestId('TestsWords__uncorrect')).toBeInTheDocument();

    fireEvent.click(invalid);

    expect(queryByTestId('TestsWords__uncorrect')).toBeInTheDocument();

    fireEvent.click(invalid);

    expect(queryByTestId('TestsWords__uncorrect')).toBeInTheDocument();

    // Progress bar value must be equal zero
    expect(Number(TestWordsTestsProgressBarPercent.getAttribute('value'))).toBe(
      0,
    );
  });

  afterEach(() => {
    cleanup();

    const { getByTestId } = renderWithRouter(
      <TestsWords words={accentsTestsWords} />,
    );

    const TestWordsStrictModeSwitcher = getByTestId(
      'TestWords__StrictModeSwitcher',
    );

    fireEvent.click(TestWordsStrictModeSwitcher);

    fireEvent.click(TestWordsStrictModeSwitcher);
  });
});

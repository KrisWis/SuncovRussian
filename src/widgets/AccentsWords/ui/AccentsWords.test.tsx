import { AccentsWords } from './AccentsWords';
import { accentsWords } from '@/shared/assets/static/accentsWords';
import { renderWithRouter } from '@/shared/tests/renderWithRouter';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';

describe('AccentsWords', () => {
  test('Click valid words and not get an error, check progress bar', async () => {
    const { getByTestId, queryByTestId } = renderWithRouter(
      <AccentsWords words={accentsWords} />,
    );

    await waitFor(() => {
      // Check progress bar value equal zero
      const AccentsWordsProgressBarPercent = getByTestId(
        'AccentsWords__AccentsProgressBar__percent',
      );

      expect(Number(AccentsWordsProgressBarPercent.getAttribute('value'))).toBe(
        0,
      );

      // Click valid words
      const valid = getByTestId('AccentsWords__valid');

      expect(valid).toBeInTheDocument();

      fireEvent.click(valid);

      expect(queryByTestId('AccentsWords__uncorrect')).not.toBeInTheDocument();

      fireEvent.click(valid);

      expect(queryByTestId('AccentsWords__uncorrect')).not.toBeInTheDocument();

      fireEvent.click(valid);

      expect(queryByTestId('AccentsWords__uncorrect')).not.toBeInTheDocument();

      // Progress bar value must increase
      expect(
        Number(AccentsWordsProgressBarPercent.getAttribute('value')),
      ).toBeGreaterThan(0);
    });
  });

  test('Click invalid word and valid word and get an error, check progress bar', async () => {
    const { getByTestId, queryByTestId } = renderWithRouter(
      <AccentsWords words={accentsWords} />,
    );

    await waitFor(() => {
      // Check progress bar value equal zero
      const AccentsWordsProgressBarPercent = getByTestId(
        'AccentsWords__AccentsProgressBar__percent',
      );

      expect(Number(AccentsWordsProgressBarPercent.getAttribute('value'))).toBe(
        0,
      );

      // Click valid word
      const valid = getByTestId('AccentsWords__valid');

      expect(valid).toBeInTheDocument();

      fireEvent.click(valid);

      expect(queryByTestId('AccentsWords__uncorrect')).not.toBeInTheDocument();

      // Click invalid word
      const invalid = getByTestId('AccentsWords__invalid');

      expect(invalid).toBeInTheDocument();

      fireEvent.click(invalid);

      expect(queryByTestId('AccentsWords__uncorrect')).toBeInTheDocument();

      // Progress bar value must increase, because valid word was clicked
      expect(
        Number(AccentsWordsProgressBarPercent.getAttribute('value')),
      ).toBeGreaterThan(0);
    });
  });

  test('Click invalid words, check progress bar', () => {
    const { getByTestId, queryByTestId } = renderWithRouter(
      <AccentsWords words={accentsWords} />,
    );

    // Progress bar value must be equal zero
    const AccentsWordsProgressBarPercent = getByTestId(
      'AccentsWords__AccentsProgressBar__percent',
    );

    expect(Number(AccentsWordsProgressBarPercent.getAttribute('value'))).toBe(
      0,
    );

    // Click invalid words
    const invalid = getByTestId('AccentsWords__invalid');

    expect(invalid).toBeInTheDocument();

    fireEvent.click(invalid);

    expect(queryByTestId('AccentsWords__uncorrect')).toBeInTheDocument();

    fireEvent.click(invalid);

    expect(queryByTestId('AccentsWords__uncorrect')).toBeInTheDocument();

    fireEvent.click(invalid);

    expect(queryByTestId('AccentsWords__uncorrect')).toBeInTheDocument();

    // Progress bar value must be equal zero
    expect(Number(AccentsWordsProgressBarPercent.getAttribute('value'))).toBe(
      0,
    );
  });

  afterEach(() => {
    cleanup();

    const { getByTestId } = renderWithRouter(
      <AccentsWords words={accentsWords} />,
    );

    const AccentsWordsStrictModeSwitcher = getByTestId(
      'AccentsWords__StrictModeSwitcher',
    );

    fireEvent.click(AccentsWordsStrictModeSwitcher);

    fireEvent.click(AccentsWordsStrictModeSwitcher);
  });
});

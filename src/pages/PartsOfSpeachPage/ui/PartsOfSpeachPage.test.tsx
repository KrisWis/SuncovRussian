import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import { getRoutePartsOfSpeach } from '@/shared/const/router';
import { queries, RenderResult, waitFor } from '@testing-library/react';
import { PartsOfSpeachType } from '../model/types/types';
import { PartsOfSpeachPage } from './PartsOfSpeachPage';
import userEvent from '@testing-library/user-event';

// Mocks
const mockTheme = 'Вводное слово';

const mockTests: PartsOfSpeachType = {
  [mockTheme]: {
    items: [
      {
        text: 'Мама, *видимо,* поняла моё состояние. Она бросила шитье и задумалась. Я заметил, как слёзы выступили у неё на глазах и потекли по щекам.',
      },

      {
        text: 'День, *безусловно,* выдался очень удачным. Солнце светило ярко, и легкий ветерок приятно освежал.',
      },
    ],
  },
};

// Tests
describe('Test with Parts Of Speach', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <PartsOfSpeachPage theme={mockTheme} item={mockTests[mockTheme]} />,
      getRoutePartsOfSpeach(mockTheme),
    );
  };

  type toCheckVariants = 'like' | 'dislike';

  const clickWordsAndCheck = async (
    indexToClick: number,
    toCheck: toCheckVariants,
  ) => {
    // Получаем все слова
    const allWords = component.getAllByTestId('PartsOfSpeachItem__word');

    // Проходимся по всем словам и кликаем на нужные
    allWords.forEach(async (word, index) => {
      if (index === indexToClick) {
        await userEvent.click(word);
        expect(word).toHaveAttribute('data-selected', 'true');
      }
    });

    // Кликаем на кнопку проверки
    const button = component.getByTestId('PartsOfSpeachPage__button');
    await userEvent.click(button);

    // Проверяем, что появился лайк
    expect(
      component.getByTestId(`PartsOfSpeachPage__${toCheck}`),
    ).toBeInTheDocument();
  };

  // BeforeEach
  let component: RenderResult<typeof queries, HTMLElement, HTMLElement>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest();
    });
  });

  // Tests
  test('Click right words, get like, continue and get like again', async () => {
    // Кликаем на правильное слово и проверяем, что появился лайк
    await clickWordsAndCheck(1, 'like');

    // Кликаем вновь на кнопку, теперь для продолжения
    await userEvent.click(component.getByTestId('PartsOfSpeachPage__button'));

    // Кликаем на правильное слово и проверяем, что появился лайк
    await clickWordsAndCheck(1, 'like');
  });

  test('Not click words, get dislike', async () => {
    // Кликаем на кнопку проверки
    const button = component.getByTestId('PartsOfSpeachPage__button');
    await userEvent.click(button);

    // Проверяем, что появился дизлайк
    expect(
      component.getByTestId(`PartsOfSpeachPage__dislike`),
    ).toBeInTheDocument();
  });

  test('Click wrong words, get dislike, continue and get dislike again', async () => {
    // Кликаем на неправильное слово и проверяем, что появился дизлайк
    await clickWordsAndCheck(2, 'dislike');

    // Кликаем вновь на кнопку, теперь для продолжения
    await userEvent.click(component.getByTestId('PartsOfSpeachPage__button'));

    // Кликаем на неправильное слово и проверяем, что появился дизлайк
    await clickWordsAndCheck(2, 'dislike');
  });
});

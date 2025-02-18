import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import { getRoutePartsOfSpeach } from '@/shared/const/router';
import { queries, RenderResult, waitFor } from '@testing-library/react';
import { PartsOfSpeachType } from '../model/types/types';
import { PartsOfSpeachPage } from './PartsOfSpeachPage';
import userEvent from '@testing-library/user-event';

// Mocks
const mockTests: PartsOfSpeachType[] = [
  {
    theme: 'Вводное слово',
    items: [
      {
        text: 'Мама, *видимо,* поняла моё состояние. Она бросила шитье и задумалась. Я заметил, как слёзы выступили у неё на глазах и потекли по щекам.',
      },

      {
        text: 'День, *безусловно,* выдался очень удачным. Солнце светило ярко, и легкий ветерок приятно освежал.',
      },
    ],
  },
];

// Tests
describe('Test with Parts Of Speach', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <PartsOfSpeachPage item={mockTests[0]} />,
      getRoutePartsOfSpeach(mockTests[0].theme),
    );
  };

  const clickWordsAndCheck = async (
    indexToClick: number,
    withLike: boolean,
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

    // Проверяем, что появился/не появился лайк
    if (withLike) {
      expect(
        component.getByTestId('PartsOfSpeachPage__like'),
      ).toBeInTheDocument();
    } else {
      expect(
        component.queryByTestId('PartsOfSpeachPage__like'),
      ).not.toBeInTheDocument();
    }
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
    await clickWordsAndCheck(1, true);

    // Кликаем вновь на кнопку, теперь для продолжения
    await userEvent.click(component.getByTestId('PartsOfSpeachPage__button'));

    // Кликаем на правильное слово и проверяем, что появился лайк
    await clickWordsAndCheck(1, true);
  });

  test('Not click words, not get like', async () => {
    // Кликаем на кнопку проверки
    const button = component.getByTestId('PartsOfSpeachPage__button');
    await userEvent.click(button);

    // Проверяем, что не появился лайк
    expect(
      component.queryByTestId('PartsOfSpeachPage__like'),
    ).not.toBeInTheDocument();
  });

  test('Click wrong words, not get like, continue and not get like again', async () => {
    // Кликаем на неправильное слово и проверяем, что появился дизлайк
    await clickWordsAndCheck(2, false);

    // Кликаем вновь на кнопку, теперь для продолжения
    await userEvent.click(component.getByTestId('PartsOfSpeachPage__button'));

    // Кликаем на неправильное слово и проверяем, что появился дизлайк
    await clickWordsAndCheck(2, false);
  });
});

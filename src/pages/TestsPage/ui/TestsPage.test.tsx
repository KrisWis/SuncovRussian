import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import { TestsPage } from './TestsPage';
import { getRouteTests } from '@/shared/const/router';
import { queries, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestsType } from '../model/types/types';

// Mocks
const mockTheme = 'Склонение';

const mockTests: TestsType = {
  [mockTheme]: {
    type: 'radioButtons',
    items: [
      {
        caption: 'Укажите существительное 1 склонения',
        hasOneCorrectAnswer: true,
        items: [
          {
            value: 'перо',
            isCorrect: false,
          },

          {
            value: 'утюг',
            isCorrect: false,
          },

          {
            value: 'река',
            isCorrect: true,
          },

          {
            value: 'дом',
            isCorrect: false,
          },
        ],
      },

      {
        caption: 'Укажите существительное 2 склонения',
        hasOneCorrectAnswer: true,
        items: [
          {
            value: 'перо',
            isCorrect: false,
          },

          {
            value: 'утюг',
            isCorrect: false,
          },

          {
            value: 'река',
            isCorrect: true,
          },

          {
            value: 'дом',
            isCorrect: false,
          },
        ],
      },

      {
        caption: 'Укажите существительное 3 склонения',
        hasOneCorrectAnswer: false,
        items: [
          {
            value: 'перо',
            isCorrect: true,
          },

          {
            value: 'утюг',
            isCorrect: false,
          },

          {
            value: 'река',
            isCorrect: true,
          },

          {
            value: 'дом',
            isCorrect: false,
          },
        ],
      },
    ],
  },
};

// Tests
describe('Test With Radio Buttons', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <TestsPage theme={mockTheme} item={mockTests[mockTheme]} />,
      getRouteTests(mockTheme),
    );
  };

  // Функция для клика по радио кнопкам
  const clickRadioButtons = async (
    defaultIndexForClick: number,
    extraIndexForClick: number,
  ) => {
    const allTests = component.getAllByTestId('RadioButtonsTest');

    for (const [index] of allTests.entries()) {
      const radioButtons = component.getAllByTestId(
        `RadioButtonsTest__radioButton__${index}`,
      );

      await userEvent.click(radioButtons[defaultIndexForClick]);

      if (index === 2) {
        await userEvent.click(radioButtons[extraIndexForClick]);
      }
    }
  };

  // Функция для проверки правильности ответов
  const checkAnswers = async (isCorrect: boolean) => {
    const checkButton = component.getByTestId(
      'TestsPage__radioButtons__checkButton',
    );

    await userEvent.click(checkButton);

    await waitFor(() => {
      expect(
        component.getByTestId(
          isCorrect
            ? 'TestsPage__radioButtons__like'
            : 'TestsPage__radioButtons__dislike',
        ),
      ).toBeInTheDocument();
    });
  };

  // BeforeEach
  let component: RenderResult<typeof queries, HTMLElement, HTMLElement>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest();
    });
  });

  // Tests
  test('Click right answers and get like', async () => {
    // Проходимся по каждому тесту и кликаем на правильные ответы
    await clickRadioButtons(2, 0);

    // Проверяем, что тест правильный
    await checkAnswers(true);
  });

  test('Click wrong answers and get dislike', async () => {
    // Проходимся по каждому тесту и кликаем на неправильные ответы
    await clickRadioButtons(0, 3);

    // Проверяем, что тест неправильный
    await checkAnswers(false);
  });
});

/* eslint-disable camelcase */
import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import { TestsPage } from './TestsPage';
import { getRouteTests } from '@/shared/const/router';
import { queries, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestInterface } from '@/features/Test';

// Mocks
const mockTheme = 'Склонение';

const mockTests: TestInterface = {
  id: 1,
  title: 'Склонение',
  questions: [
    {
      id: 1,
      text: 'Укажите существительное 1 склонения',
      has_one_correct_answer: true,
      test: 1,
      answers: [
        {
          id: 1,
          text: 'перо',
          is_correct: false,
          question: 1,
        },

        {
          id: 2,
          text: 'утюг',
          is_correct: false,
          question: 1,
        },

        {
          id: 3,
          text: 'река',
          is_correct: true,
          question: 1,
        },

        {
          id: 4,
          text: 'дом',
          is_correct: false,
          question: 1,
        },
      ],
    },

    {
      id: 2,
      text: 'Укажите существительное 2 склонения',
      has_one_correct_answer: true,
      test: 2,
      answers: [
        {
          id: 1,
          text: 'перо',
          is_correct: false,
          question: 2,
        },

        {
          id: 2,
          text: 'утюг',
          is_correct: false,
          question: 2,
        },

        {
          id: 3,
          text: 'река',
          is_correct: true,
          question: 2,
        },

        {
          id: 4,
          text: 'дом',
          is_correct: false,
          question: 2,
        },
      ],
    },

    {
      id: 3,
      text: 'Укажите существительное 3 склонения',
      has_one_correct_answer: false,
      test: 3,
      answers: [
        {
          id: 1,
          text: 'перо',
          is_correct: true,
          question: 3,
        },

        {
          id: 2,
          text: 'утюг',
          is_correct: false,
          question: 3,
        },

        {
          id: 3,
          text: 'река',
          is_correct: true,
          question: 3,
        },

        {
          id: 4,
          text: 'дом',
          is_correct: false,
          question: 3,
        },
      ],
    },
  ],
};

// Tests
describe('Test With Radio Buttons', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <TestsPage theme={mockTheme} questions={mockTests.questions} />,
      getRouteTests(mockTheme),
    );
  };

  // Функция для клика по радио кнопкам
  const clickRadioButtons = async (
    defaultIndexForClick: number,
    extraIndexForClick: number,
  ) => {
    const allTests = component.getAllByTestId('Test');

    for (const [index] of allTests.entries()) {
      const radioButtons = component.getAllByTestId(
        `Test__radioButton__${index}`,
      );

      await userEvent.click(radioButtons[defaultIndexForClick]);

      if (index === 2) {
        await userEvent.click(radioButtons[extraIndexForClick]);
      }
    }
  };

  // Функция для проверки правильности ответов
  const checkAnswers = async (isCorrect: boolean) => {
    const checkButton = component.getByTestId('TestsPage__checkButton');

    await userEvent.click(checkButton);

    await waitFor(() => {
      expect(
        component.getByTestId(
          isCorrect ? 'TestsPage__like' : 'TestsPage__dislike',
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

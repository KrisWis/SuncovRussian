import { getRouteDictant } from '@/shared/const/router';
import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import { transliterate } from '@/shared/utils/transliterate';
import { queries, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DictantsPage } from './DictantsPage';
import { DictantItem } from '@/features/Dictant';

// Mocks
const mockDictant: DictantItem = {
  subtheme: 'Тема',
  text: 'певц*ы*, творец**@',
};

const mockDictantWithSentencesAndThemes: DictantItem = {
  subtheme: 'Тема',
  text: '&гар - гор& певц*ы*, творец**@&Зар - зор& рыб*ы*, шутка**@',
};

const mockDictantTheme = 'theme';
const mockDictantSubtheme = 'subtheme';

// Tests
describe('Dictant with Words', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <DictantsPage dictant={mockDictant} />,
      getRouteDictant(
        transliterate(mockDictantTheme),
        transliterate(mockDictantSubtheme),
      ),
    );
  };

  let component: RenderResult<typeof queries, HTMLElement, HTMLElement>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest();
    });
  });

  // Tests
  test('Write valid letters and get like', async () => {
    const inputs = component.getAllByTestId('Dictant__input');

    for (let i = 0; i < inputs.length; i++) {
      if (i === 0) {
        await userEvent.type(inputs[i], 'ы');
      }
    }

    const check = component.getByTestId('Dictant__check');
    await userEvent.click(check);

    await waitFor(() => {
      expect(component.getByTestId('Dictant__like')).toBeInTheDocument();
    });
  });

  test('Write invalid letters and get dislike', async () => {
    const inputs = component.getAllByTestId('Dictant__input');

    for (let i = 0; i < inputs.length; i++) {
      if (i === 0) {
        await userEvent.type(inputs[i], 'q');
      } else if (i === 1) {
        await userEvent.type(inputs[i], 'q');
      }
    }

    const check = component.getByTestId('Dictant__check');
    await userEvent.click(check);

    await waitFor(() => {
      expect(component.getByTestId('Dictant__dislike')).toBeInTheDocument();
    });
  });
});

describe('Dictant with Sentences and Themes', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <DictantsPage dictant={mockDictantWithSentencesAndThemes} />,
      getRouteDictant(
        transliterate(mockDictantTheme),
        transliterate(mockDictantSubtheme),
      ),
    );
  };

  let component: RenderResult<typeof queries, HTMLElement, HTMLElement>;

  beforeEach(async () => {
    await waitFor(() => {
      component = setupTest();
    });
  });

  // Tests
  test('Write valid letters and get like', async () => {
    const inputs = component.getAllByTestId('Dictant__input');

    for (let i = 0; i < inputs.length; i++) {
      if (i === 0 || i === 2) {
        await userEvent.type(inputs[i], 'ы');
      }
    }

    const check = component.getByTestId('Dictant__check');
    await userEvent.click(check);

    await waitFor(() => {
      expect(component.getByTestId('Dictant__like')).toBeInTheDocument();
    });
  });

  test('Write invalid letters and get dislike', async () => {
    const inputs = component.getAllByTestId('Dictant__input');

    for (let i = 0; i < inputs.length; i++) {
      await userEvent.type(inputs[i], 'q');
    }

    const check = component.getByTestId('Dictant__check');
    await userEvent.click(check);

    await waitFor(() => {
      expect(component.getByTestId('Dictant__dislike')).toBeInTheDocument();
    });
  });
});

import { getRouteDictant } from '@/shared/const/router';
import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import { transliterate } from '@/shared/utils/transliterate';
import { Dictant } from './Dictant';
import { queries, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockDictantText: string = 'певц*ы*, творец**.';
const mockDictantTheme = 'tsi-tsi';

// Tests
describe('Dictant', () => {
  // Helpers
  const setupTest = () => {
    return renderWithProviders(
      <Dictant text={mockDictantText} />,
      getRouteDictant(transliterate(mockDictantTheme)),
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

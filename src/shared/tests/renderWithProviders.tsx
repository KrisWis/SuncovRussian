import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../lib/store';

export const renderWithProviders = (
  component: React.ReactElement,
  route: string = '/',
) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Provider store={store}>{component}</Provider>
    </MemoryRouter>,
  );
};
renderWithProviders.displayName = 'renderWithProviders';

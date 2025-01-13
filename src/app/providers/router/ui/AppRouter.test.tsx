import { screen } from '@testing-library/react';
import { AppRouter } from './AppRouter';
import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import { getRouteMain } from '@/shared/const/router';

describe('AppRouter', () => {
  test('Страница должна отрендериться', async () => {
    renderWithProviders(<AppRouter />, getRouteMain());

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Страница не найдена', async () => {
    renderWithProviders(<AppRouter />, '/sasasa');

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });
});

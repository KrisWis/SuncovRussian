import { store } from '@/app/store/AppStore';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

export const renderWithRouter = (component: React.ReactElement) => {
  return render(<Provider store={store}>{component}</Provider>);
};
renderWithRouter.displayName = 'renderWithRouter';

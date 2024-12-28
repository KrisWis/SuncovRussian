import { createContext } from 'react';
import { HeaderCategories } from './types';

export interface HeaderContext {
  headerCategory: HeaderCategories | null;
  setHeaderCategory: React.Dispatch<
    React.SetStateAction<HeaderCategories | null>
  >;
}

export const HeaderContext = createContext<HeaderContext>({
  headerCategory: null,
  setHeaderCategory: () => {},
});

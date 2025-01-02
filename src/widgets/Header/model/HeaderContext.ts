import { createContext } from 'react';

export interface HeaderContext {
  headerCategory: string | null;
  setHeaderCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const HeaderContext = createContext<HeaderContext>({
  headerCategory: null,
  setHeaderCategory: () => {},
});

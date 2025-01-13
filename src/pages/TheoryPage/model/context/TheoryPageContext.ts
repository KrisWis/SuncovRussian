import { createContext } from 'react';

export interface TheoryPageContext {
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
}

export const TheoryPageContext = createContext<TheoryPageContext>({
  selectedSection: '',
  setSelectedSection: () => {},
});

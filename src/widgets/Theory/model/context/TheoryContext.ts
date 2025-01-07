import { createContext } from 'react';

export interface TheoryContext {
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
}

export const TheoryContext = createContext<TheoryContext>({
  selectedSection: '',
  setSelectedSection: () => {},
});

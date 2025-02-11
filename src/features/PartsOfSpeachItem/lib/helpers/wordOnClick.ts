export const wordOnClick = (
  selectedWords: number[],
  setSelectedWords: (words: number[]) => void,
  index: number,
) => {
  if (!selectedWords.includes(index)) {
    setSelectedWords([...selectedWords, index]);
  } else {
    setSelectedWords(selectedWords.filter((item) => item !== index));
  }
};

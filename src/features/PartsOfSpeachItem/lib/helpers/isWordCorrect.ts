// Проверка на наличие "*" в начале и конце слова (значит слово правильное)
export const isWordCorrect = (word: string) => {
  const regex = /^\*.*\*$/;
  return regex.test(word);
};

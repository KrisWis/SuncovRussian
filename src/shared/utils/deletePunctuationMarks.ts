export const PUNCTUATION_MARKS = [
  '.',
  ',',
  '!',
  ';',
  ':',
  '_',
  '?',
  '"',
  "'",
  '«',
  '»',
];

export const deletePunctiationMarks = (string: string): string => {
  return string.replace(new RegExp(`[${PUNCTUATION_MARKS.join('')}]`, 'g'), '');
};

import { transliterate } from './transliterate';

describe('transliterate', () => {
  it('should not transliterate english word', () => {
    expect(transliterate('hello')).toBe('hello');
  });

  it('should transliterate russian word', () => {
    expect(transliterate('привет')).toBe('privet');
  });
});

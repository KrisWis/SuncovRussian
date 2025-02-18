import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';

const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

beforeAll(() => {
  // Отключаем предупреждения о CORS в консоли
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

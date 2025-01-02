import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
const originalError = console.error;
console.error = (...args) => {
  if (args[0]?.includes('Store does not have a valid reducer')) {
    return;
  }
  originalError.call(console, ...args);
};

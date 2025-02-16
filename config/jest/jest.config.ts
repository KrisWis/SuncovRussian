import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^@/(.*)$': '<rootDir>/src/$1',
    'react-pdf': '<rootDir>/config/jest/__mocks__/react-pdf.js',
    'react-pdf/dist/Page/AnnotationLayer.css':
      '<rootDir>/config/jest/__mocks__/styleMock.js',
    'react-pdf/dist/Page/TextLayer.css':
      '<rootDir>/config/jest/__mocks__/styleMock.js',
  },

  globals: {
    __IS_DEV__: true,
  },

  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
      },
    ],
  ],
};

export default config;

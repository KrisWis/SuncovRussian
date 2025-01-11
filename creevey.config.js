const path = require('path');

module.exports = {
  seleniumOptions: {
    scriptTimeout: 120000,
    pageLoadTimeout: 120000,
    implicitlyWait: 120000,
  },

  browsers: {
    chrome: {
      browserName: 'chrome',
      viewport: { width: 1024, height: 720 },
      limit: 1,
      seleniumOptions: {
        args: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--disable-extensions',
          '--disable-web-security',
          '--start-maximized',
        ],
      },

      capabilities: {
        'goog:chromeOptions': {
          args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
        },
      },
    },
  },

  storybookAutorunCmd: 'npm run storybook',

  screenDir: path.join(__dirname, '/creevey/images'),

  reportDir: path.join(__dirname, '/creevey/report'),

  diffOptions: { threshold: 0.1 },

  storybookUrl: 'http://10.255.0.1:6006/',

  storybookTimeout: 120000,
};

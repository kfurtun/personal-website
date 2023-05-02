const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$':
      '<rootDir>/test/__mocks__/file-mock.js',
    '^src/(.*)': '<rootDir>/src/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^theme/(.*)': '<rootDir>/src/theme/$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
};

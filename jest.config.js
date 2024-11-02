module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',  // Sets up a DOM environment for tests
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    testMatch: ['**/?(*.)+(spec|test).ts'],  // Matches test files with .spec.ts or .test.ts suffixes
  };
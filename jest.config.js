module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/tests'],
    moduleFileExtensions: ['ts', 'js'],
    transform: { '^.+\\.tsx?$': 'ts-jest' },
    testMatch: ['**/*.test.ts'],
  };
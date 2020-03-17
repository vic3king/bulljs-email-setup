module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'server/**/*.js',
    '!__tests__/**/*.js?(x)',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/server/database/migrations',
    '<rootDir>/server/database/seeders',
    '<rootDir>/server/database/models/index.js',
  ],
  testEnvironment: 'node',
};

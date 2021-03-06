module.exports = {
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coveragePathIgnorePatterns: ['src/index.tsx', 'src/index.profiler.tsx'],
  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@utilities/(.*)": "<rootDir>/src/utilities/$1",
  },
  resetMocks: true,
  resetModules: true,
  roots: ["<rootDir>/src"],
  setupFiles: ["<rootDir>/src/utilities/setupTests.ts"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  timers: 'fake',
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

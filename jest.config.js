module.exports = {
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/components/$1",
  },
  roots: ["<rootDir>/src"],
  setupFiles: ["<rootDir>/src/spec/setupTests.js"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

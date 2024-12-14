/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/config/fileMock.js",
    "^.+\\.(css|less)$": "<rootDir>/config/CSSStub.js",
  },
};

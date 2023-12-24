
const config = {
  testMatch: ['**/src/**/*.test.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
  '^.+\\.ts?$': 'ts-jest',
  '^.+\\.tsx?$': 'ts-jest',
  '^.+\\.js?$': 'babel-jest',
  '^.+\\.jsx?$': 'babel-jest',
  },
};

export default config;

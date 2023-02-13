module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    IS_REACT_ACT_ENVIRONMENT: true
  }
};

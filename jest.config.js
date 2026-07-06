const jestConfig = {

    testEnvironment: "node",
  
    transform: {},
  
    testMatch: [
      "<rootDir>/tests/**/*.test.js",
    ],
  
    setupFiles: [
      "<rootDir>/tests/setupEnv.js",
    ],
  
    clearMocks: true,
    restoreMocks: true,
    verbose: true,
  };
  
  export default jestConfig;
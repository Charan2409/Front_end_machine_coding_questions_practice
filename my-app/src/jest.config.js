export default {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Support CSS Modules
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};

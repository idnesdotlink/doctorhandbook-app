module.exports = {
  verbose: false,
  rootDir: '../',
  testPathIgnorePatterns: [
    '<rootDir>/src/main/',
    '<rootDir>/src/vue-material/',
    '<rootDir>/external/'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(spec))\\.(vue|js)$',
  'moduleFileExtensions': [
    'js',
    'json',
    'vue'
  ],
  'moduleNameMapper': {
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.common.js',
    '^vue-material(.*)$': '<rootDir>/src/vue-material/dev$1',
    '^test(.*)$': '<rootDir>/test$1',
    '^src(.*)$': '<rootDir>/src$1',
    '^core/(.*)$': '<rootDir>/src/vue-material/dev/core/$1',
    '^components(.*)$': '<rootDir>/src/vue-material/dev/components$1',
    '\\.(css|scss)$': '<rootDir>/test/styleMock.js',
    '^@partials/(.*)$': '<rootDir>/src/renderer/components/partials/$1',
    '^@extras/(.*)$': '<rootDir>/src/renderer/components/extras/$1',
    '^@mixins/(.*)$': '<rootDir>/src/renderer/mixins/$1',
    '@/orm': '<rootDir>/src/renderer/orm',
    '@windowUrls': '<rootDir>/src/main/windowUrls',
    '@windowDefinitions': '<rootDir>/src/main/windowDefinitions',
    '@helpers/(.*)$': '<rootDir>/src/renderer/helpers/$1'
  },
  'setupTestFrameworkScriptFile': '<rootDir>/test/setup.js',
  'transform': {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  'snapshotSerializers': [
    'jest-serializer-vue'
  ]
}

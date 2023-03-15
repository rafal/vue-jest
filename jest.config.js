module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.(js|jsx)?$': 'babel-jest',
      // process `*.vue` files with `vue-jest`
      ".*\\.(vue)$": "vue-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
}
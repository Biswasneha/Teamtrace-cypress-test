// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://dev2.teamtrace.app/',
//     setupNodeEvents(on, config) {
//       // implement node event listeners here if needed
//     },
//   },
// })





const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    fixturesFolder: 'cypress/fixtures', // ✅ This should exist
    supportFile: 'cypress/support/e2e.js'
  }
})

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    fixturesFolder: 'cypress/fixtures',      // your existing config
    supportFile: 'cypress/support/e2e.js',   // your existing config

    // ✅ Add the reporter configuration
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/json',     // where to save raw JSON reports
      overwrite: false,                      // keep multiple test run files
      html: false,                           // disable auto HTML (we’ll generate manually)
      json: true                             // enable JSON output
    },
  },
});

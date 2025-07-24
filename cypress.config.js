const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // setupNodeEvents(on, config) {
      // // Plugin pour le grep (filtrage de tests avec tags)
      // require('@cypress/grep/src/plugin')(config);
      // return config;
    // }

      // Plugin pour le reporter HTML
      setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

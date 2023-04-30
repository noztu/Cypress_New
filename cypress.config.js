const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  hideXHR: true,
 viewportWidth: 1366,
 viewportHeight: 768,
  e2e: {
    //baseUrl yazilabilir
   // watchForFileChanges: false,
    //video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

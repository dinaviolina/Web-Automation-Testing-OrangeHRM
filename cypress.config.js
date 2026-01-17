const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    defaultCommandTimeout: 10000,  
    pageLoadTimeout: 120000, // cy.visit waits 2 min for page load
  },
});

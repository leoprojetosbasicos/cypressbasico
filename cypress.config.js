const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com",
    viewportWidth: 1024,
    viewportHeight: 768,
    video:false,
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

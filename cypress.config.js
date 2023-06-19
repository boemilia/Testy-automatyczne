const { defineConfig } = require("cypress");

module.exports = defineConfig ({
  projectId: '7dpgyq',
  reporter: "mochawesome",
  reporterOptions:{
    "reportFilename": "[name]-report",
    "overwrite": true,
    "html": true,
    "json": true
  },
  e2e: {
    
    viewportHeight: 1080,
    viewportWidth: 1440,
    baseUrl: 'https://pasi-konik.pl/',
    setupNodeEvents(on, config) {
      // implement node event listeners here

      
    },
  },
});


const express = require("express");
const path = require('path');

const PORT = 5000;
function createApp(middlewares) {
  const app = express();
  app.use(express.static(path.join(__dirname, 'public')));
  middlewares.forEach((use) => {
    use(app);
  });
  return app;
}

module.exports = {
  createApp,
  PORT,
};

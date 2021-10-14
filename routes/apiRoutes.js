// ROUTING
const API = require('./api');

module.exports = (app) => {
  app.get('/api/exercise', (req, res) => res.json('exercise'));

  app.get('/api/stats', (req, res) => res.json('stats'));
};

const user1sController = require('../controllers').user1s;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Booksville!',
  }));

  app.post('/user1s', user1sController.create);
};
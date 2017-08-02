const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Booksville!',
  }));

  app.post('/users', usersController.create);
};
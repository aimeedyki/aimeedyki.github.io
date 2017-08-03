const user1sController = require('../controllers').user1s;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Booksville!',
  }));
  
  //route for registration
  app.post('/api/user1s/register', user1sController.create);
  //route for login
  app.post('/api/user1s/login', user1sController.auth);
   
};
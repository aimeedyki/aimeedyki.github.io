const user1sController = require('../controllers').user1s;
const booksController = require('../controllers').books;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Booksville!',
  }));
  
  //route for registration
  app.post('/api/user1s/register', user1sController.create);
  //route for login
  app.post('/api/user1s/login', user1sController.auth);
  //route for adding a book
  app.post('/api/books', booksController.create );
  //route for modifying book information
  app.put('/api/books/1', booksController.modify);
  //displays allbooks in the library
  app.get('/api/books', booksController.list);
};
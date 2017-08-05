const user1sController = require('../controllers').user1s;
const booksController = require('../controllers').books;
const historiesController = require('../controllers').histories;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Booksville!',
  }));
  
  //route for registration
  app.post('/api/user1s/signup', user1sController.create);
  //route for login
  app.post('/api/user1s/signin', user1sController.auth);
  //route for adding a book
  app.post('/api/books', booksController.create );
  //route for modifying book information
  app.put('/api/books/:bookid', booksController.modify);
  //displays allbooks in the library
  app.get('/api/books', booksController.list);
  //borrows a book and saves to history of a user
  app.post('/api/users/:user1Id/books', historiesController.create);
  //returns a book to the library by updating date returned
  app.put('/api/users/:user1Id/books', historiesController.modify);
  //displays history
  app.get('/api/users/:user1Id/books', historiesController.list);
 //display not returned
 app.get('/api/users/:user1Id/books?returned=false', historiesController.returned)

};
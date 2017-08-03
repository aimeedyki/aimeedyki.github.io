const history = require('../models').history;

module.exports = {
  //user borrows a book and creates a historyrecord
  create(req, res) {
    return history
      .create({
        title: req.body.title,
        borrowed: req.body.borrowed,
        })
      .then(history => res.status(201).send(history))
      .catch(error => console.log(error.message)); 
  },
}
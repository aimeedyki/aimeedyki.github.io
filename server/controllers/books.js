const book = require('../models').book;

module.exports = {
	//adds a book
  create(req, res) {
    return book
      .create({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        quantity: req.body.quantity,
        category: req.body.category,
      })
      .then(book => res.status(201).send(book))
      .catch(error => console.log(error.message)); 
  },
}
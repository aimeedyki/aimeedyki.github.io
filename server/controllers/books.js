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
        })
      .then(book => res.status(201).send(book))
      .catch(error => console.log(error.message)); 
  },

  modify(req, res) {
    book.update({
          title: req.body.title,
          image: req.body.image,
          description: req.body.description,
          quantity: req.body.quantity,
          categoryId: req.body.category,
      },
        { where: { title: req.body.title } 
      })
      .then(book => res.status(201).send("updated"))
      .catch(error => console.log(error.message)); 
  },

}
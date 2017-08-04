const history = require('../models').history;

module.exports = {
  //user borrows a book and creates a history record
  create(req, res) {
    return history
      .create({
        title: req.body.title,
        borrowed: req.body.borrowed,
        user1Id: req.params.user1Id,  
        })
      .then(history => res.status(201).send(history))
      .catch(error => console.log(error.message)); 
  },
  //returns the book by updating the history with return date
  modify(req, res) {
    history.update({
          title: req.body.title,
          borrowed: req.body.borrowed,
          returned: req.body.returned,
  },
    { where: { user1Id: req.params.user1Id, title:req.body.title } 
  })
      .then(history => res.status(201).send("book returned"))
      .catch(error => console.log(error.message)); 
  },
   //displays user history
  list(req, res) {

    return history
    .all({ where: { user1Id: req.params.user1Id }})

    .then(histories => res.status(200).send(histories))
    .catch(error => res.status(400).send(error.message));
},
//display books not neturned
returned(req, res) {
    return history
    .all({ where: { user1Id: req.params.user1Id, returned: 'null',}})

    .then(histories => res.status(200).send(histories))
    .catch(error => res.status(400).send(error.message));
},

}
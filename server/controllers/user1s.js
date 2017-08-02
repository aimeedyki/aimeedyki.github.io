const user1 = require('../models').user1;

module.exports = {
  create(req, res) {
    return user1
      .create({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        level: req.body.level,
        profilepic: req.body.profilepic,
      })
      .then(user1 => res.status(201).send(user1))
      .catch(error => console.log(error.message)); //res.status(400).send(error));
  },
};

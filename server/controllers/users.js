const user = require('../models').user;

module.exports = {
  create(req, res) {
    return user
      .create({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        level: req.body.level,
        profilepic: req.body.profilepic,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};

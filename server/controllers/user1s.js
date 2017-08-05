const user1 = require('../models').user1;
const bcrypt = require('bcrypt');

module.exports = {
  //creates a user 
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
      .catch(error => console.log(error.message)); 
  },
  //authenticates login
  auth(req, res, next){
    return user1
    .all({ where: { email: req.body.email }})
     .then(user1 => res.status(201).send(user1))
      .catch(error => console.log(error.message)); 
    /*.then((user1)=>{

            if(req.body.password === user1.password){
              res.send(status);
            } 
            else {
              res.send("password or email is incorrect");
            }
          })
     
    .catch(error => console.log(error.message)); */
  },

};

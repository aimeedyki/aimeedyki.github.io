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
    user1.findOne({where: {email: req.body.email}})
    .then((user)=>{
      bcrypt.compare(req.body.password, this.password,(err, isMatch)=>{
        if(isMatch){
              res.send('successful');
            } 
            else {
              res.send("password and email is incorrect");
            }
          });
        })
    
    .catch(error => console.log(error.message)); 
  },

};

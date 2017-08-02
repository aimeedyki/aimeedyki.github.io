'use strict';
const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) =>{
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.STRING,
    profilepic: DataTypes.STRING
  }, {
    instanceMethods: {
        generateHash: (password) => {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword: (password) =>{
            return bcrypt.compareSync(password, this.password);
        },
    },
    
  },
 
 {
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
        user.hasMany(models.history, {
          foreignKey: 'userId',
          as: 'History',
        });
        user.hasMany(models.notreturned, {
          foreignKey: 'userId',
          as: 'Notreturned',
        });
      }
    }
  });
  return user;
};
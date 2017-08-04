'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes)=> {
  const user1 = sequelize.define('user1', {
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.STRING,
    profilepic: DataTypes.STRING
  },//hashes password
  {  hooks: {
       beforeCreate: (user1) => {
         const salt = bcrypt.genSaltSync();
         user.password = bcrypt.hashSync(user1.password, salt);
       }
     },
    instanceMethods: {
        generateHash: (password) => {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword: (password) =>{
            return bcrypt.compareSync(password, this.password);
        },
    },
    
  }); 

  user1.associate = (models) =>{
        // associations are defined here
         user1.hasMany(models.history, {
          foreignKey: 'user1Id',
          as: 'History',
        });
         user1.hasMany(models.history, {
          foreignKey: 'user1Id',
          as: 'Userbook',
        });
        user1.hasMany(models.notreturned, {
          foreignKey: 'user1Id',
          as: 'Notreturned',
        });
      };
  return user1;
};
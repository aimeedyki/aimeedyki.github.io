'use strict';
module.exports = (sequelize, DataTypes) =>{
  const user = sequelize.define('user', {
    email: DataTypes.STRING
  }, {
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
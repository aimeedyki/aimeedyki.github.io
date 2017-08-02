'use strict';
module.exports = (sequelize, DataTypes) =>{
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.STRING,
    profilepic: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
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
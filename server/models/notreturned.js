'use strict';
module.exports = (sequelize, DataTypes)=> {
  const notreturned = sequelize.define('notreturned', {
    title: DataTypes.STRING,
    borrowed: DataTypes.DATE
  }, {
            // associations can be defined here
        classMethods: {
      associate: (models) => {
          notreturned.hasMany(models.book, {
          foreignKey: 'notreturnedId',
          as: 'Book',
        });
      }
    }
  });
  return notreturned;
};
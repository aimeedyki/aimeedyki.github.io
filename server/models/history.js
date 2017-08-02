'use strict';
module.exports = (sequelize, DataTypes) =>{
  const history = sequelize.define('history', {
    title: DataTypes.STRING,
    borrowed: DataTypes.DATE,
    returned: DataTypes.DATE
  }, {
    classMethods: {
      associate: (models) =>{
        // associations can be defined here
         history.hasMany(models.book, {
          foreignKey: 'historyId',
          as: 'Book',
        });
         history.belongsTo(models.user, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return hist;
};
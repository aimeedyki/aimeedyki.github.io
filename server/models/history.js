'use strict';
module.exports = (sequelize, DataTypes) =>{
  const history = sequelize.define('history', {
    title: DataTypes.STRING,
    user1Id: DataTypes.INTEGER,
    borrowed: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    return: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate: (models) =>{
        // associations can be defined here
         history.hasMany(models.book, {
          foreignKey: 'historyId',
          as: 'Book',
        });
         history.belongsTo(models.user, {
          foreignKey: 'user1Id',
          onDelete: 'CASCADE',
        });
            }
    }
    
  });
  return history;
};
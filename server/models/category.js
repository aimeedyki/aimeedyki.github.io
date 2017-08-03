'use strict';
module.exports = (sequelize, DataTypes)=> {
  const category = sequelize.define('category', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) =>{
        // associations can be defined here
        category.hasMany(models.book, {
          foreignKey: 'categoryId',
          as: 'Book',
        });
      }
    }
  });
  return category;
};
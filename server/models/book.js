'use strict';
module.exports = (sequelize, DataTypes)=> {
  const book = sequelize.define('book', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) =>{
        // associations can be defined here

        book.belongsTo(models.category, {
          foreignKey: 'categoryId',
          as: 'Category',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return book;
};
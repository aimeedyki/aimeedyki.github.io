'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('notreturneds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      borrowed: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    }),
   down: (queryInterface/*, Sequelize*/)=> queryInterface.dropTable('notreturneds'),
 };
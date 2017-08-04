'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('histories', {
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
      returnDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      returned: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user1Id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
          as: 'user1Id',
        },
      },
    }),
  
  down: (queryInterface/*, Sequelize*/) => queryInterface.dropTable('hists'),
  };

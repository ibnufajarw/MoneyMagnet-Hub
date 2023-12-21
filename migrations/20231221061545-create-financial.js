'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Financials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalInvestment: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      cashBalance: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:  "Users",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Financials');
  }
};
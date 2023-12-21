'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("UserStocks", "StockId", {
			type: Sequelize.INTEGER,
			allowNull: false,
      references: {
        model:  "Stocks",
        key: "id"
      }
		});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("UserStocks", "StockId");    
  }
};

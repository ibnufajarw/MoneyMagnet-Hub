'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = require("../data/stock.json").map((el) => {
			delete el.id;
			el.createdAt = new Date();
			el.updatedAt = new Date();
			return el;
		});
		return queryInterface.bulkInsert("Stocks", data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Stocks", null, {})
  }
};

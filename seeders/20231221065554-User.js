'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = require("../data/user.json").map((el) => {
			delete el.id;
			el.createdAt = new Date();
			el.updatedAt = new Date();
			return el;
		});
		return queryInterface.bulkInsert("Users", data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {})
  }
};

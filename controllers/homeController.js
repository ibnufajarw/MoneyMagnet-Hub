/** @format */

const { Stock } = require("../models");

class homeController {
	static async getAllStocks(req, res) {
		try {
			// console.log("stocks");
			const stocks = await Stock.findAll();
			res.render("home", { stocks });
		} catch (error) {
			res.status(500).render({ error: "Internal Server Error" });
		}
	}
}

module.exports = homeController;

/** @format */

const { Stock, Transaction } = require("../models");

class homeController {
	static async getAllStocks(req, res) {
		try {
			const stocks = await Stock.findAll();
			const topThree = await Stock.findAll({
				order: [["currentPrice", "DESC"]],
				limit: 3,
			});
			res.render("home", { stocks, topThree });
		} catch (error) {
			res.status(500).render({ error: "Internal Server Error" });
		}
	}
	static async detail(req, res) {
		const { id } = req.params.id;
		try {
			const stocks = await Stock.findByPk(id, {
				include: {
					model: Transaction,
				},
			});
			// console.log(stocks);
			res.render("stockDetail", { stocks });
		} catch (error) {
			res.status(500).render({ error: "Internal Server Error" });
		}
	}
}

module.exports = homeController;

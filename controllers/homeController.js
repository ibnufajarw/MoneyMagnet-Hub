/** @format */

const { Stock, Transaction } = require("../models");

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
	static async detail(req, res){
		try {
			const { id } = req.params;
			const stock = await Stock.findByPk(id, {
				include: {
					model: Transaction
				}
			});
			console.log(stock);
			res.render('stockDetail', { stock });
		} catch (error) {
			console.error(error);
			res.send(error.message);
		}
    }
}

module.exports = homeController;

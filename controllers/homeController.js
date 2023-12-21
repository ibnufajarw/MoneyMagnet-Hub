/** @format */

const { Stock, Transaction } = require("../models");

class homeController {
	static async getAllStocks(req, res) {
		try {
			const stocks = await Stock.findAll();
			// console.log(stocks);
			res.render("home", { stocks });
		} catch (error) {
			res.status(500).render({ error: "Internal Server Error" });
		}
	}
	static async detail(req, res){
        const { id } = req.params
        try {
			const all = await Stock.findAll();
            const stock = await Stock.findByPk(id, {
                include: {
                    model: Transaction
                    
                }
            })
            res.render('stockDetail', { stock, all})
        } catch (error) {
            res.send(error.message)
        }
    }
}

module.exports = homeController;

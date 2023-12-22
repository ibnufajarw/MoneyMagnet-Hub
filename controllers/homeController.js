/** @format */
const { Op } = require("sequelize");
const { Stock, Transaction } = require("../models");

class homeController {
	static async getAllStocks(req, res) {
        try {
            let stocks;

            if (req.query.q) {
                const searchQuery = req.query.q.trim();
                stocks = await Stock.findAll({
                    where: {
                        [Op.or]: [
                            {
                                name: { [Op.iLike]: `%${searchQuery}%` }
                            },
                        ],
                    },
                });
            } else {
                stocks = await Stock.findAll();
            }

            const topThree = await Stock.findAll({
                order: [["currentPrice", "DESC"]],
                limit: 3,
            });

            res.render("home", { stocks, topThree, searchQuery: req.query.q });
        } catch (error) {
            console.error(error.message);
            res.status(500).render("error", { error: "Internal Server Error" });
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
			res.render("stockDetail", { stocks });
		} catch (error) {
			res.status(500).render({ error: "Internal Server Error" });
		}
	}
}

module.exports = homeController;

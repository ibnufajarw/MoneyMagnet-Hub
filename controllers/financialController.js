/** @format */

const { Financial } = require("../models");

class FinancialController {
	static async getFinancial(req, res) {
		try {
			const userId = req.session.userId;
			const userFinancial = await Financial.findOne({
				where: { UserId: userId },
			});

			res.render("financial", { userFinancial });
		} catch (error) {
			console.error(error);
			res.status(500).send("Internal Server Error");
		}
	}
}

module.exports = FinancialController;

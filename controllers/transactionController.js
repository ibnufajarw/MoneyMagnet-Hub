/** @format */

const { Financial, Transaction, Stock, UserStock } = require("../models");

class TransactionController {
	static async buyStock(req, res) {
		try {
			const userId = req.session.userId;
			const stockId = req.params.stockId;

			const userFinancial = await Financial.findOne({
				where: { UserId: userId },
			});

			const stock = await Stock.findByPk(stockId);

			if (!stock) {
				return res.status(404).send("Stock not found");
			}

			const transactionAmount = 100;
			const transaction = {
				UserId: userId,
				StockId: stockId,
				type: "buy",
				amount: transactionAmount,
				quantity: transactionAmount / stock.currentPrice,
				date: new Date(),
			};

			await Transaction.create(transaction);

			await Financial.update(
				{ cashBalance: userFinancial.cashBalance - transactionAmount },
				{ where: { UserId: userId } }
			);

			await UserStock.findOrCreate({
				where: { UserId: userId, StockId: stockId },
				defaults: { quantity: transaction.quantity },
			});

			res.redirect("/stocks");
		} catch (error) {
			console.error(error);
			res.status(500).send("Internal Server Error");
		}
	}

	static async sellStock(req, res) {
		try {
			const userId = req.session.userId;
			const stockId = req.params.stockId;

			const userFinancial = await Financial.findOne({
				where: { UserId: userId },
			});

			const stock = await Stock.findByPk(stockId);

			if (!stock) {
				return res.status(404).send("Stock not found");
			}

			const transactionAmount = 100;
			const transaction = {
				UserId: userId,
				StockId: stockId,
				type: "sell",
				amount: transactionAmount,
				quantity: transactionAmount / stock.currentPrice,
				date: new Date(),
			};

			await Transaction.create(transaction);

			await Financial.update(
				{ cashBalance: userFinancial.cashBalance + transactionAmount },
				{ where: { UserId: userId } }
			);

			await UserStock.update(
				{ quantity: sequelize.literal(`quantity - ${transaction.quantity}`) },
				{ where: { UserId: userId, StockId: stockId } }
			);

			res.redirect("/stocks");
		} catch (error) {
			console.error(error);
			res.status(500).send("Internal Server Error");
		}
	}
}

module.exports = TransactionController;

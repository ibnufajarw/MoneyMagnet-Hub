/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Transaction extends Model {
		static associate(models) {
			Transaction.belongsTo(models.User, { foreignKey: "UserId" });
			Transaction.belongsTo(models.Stock, { foreignKey: "StockId" });
		}
	}
	Transaction.init(
		{
			type: DataTypes.STRING,
			amount: DataTypes.INTEGER,
			quantity: DataTypes.INTEGER,
			date: DataTypes.DATE,
			UserId: DataTypes.INTEGER,
			StockId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Transaction",
		}
	);
	return Transaction;
};

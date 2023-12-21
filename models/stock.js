/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Stock extends Model {
		static associate(models) {
			Stock.belongsToMany(models.User, {
				through: "UserStocks",
				foreignKey: "StockId",
			});
			Stock.hasMany(models.Transaction, { foreignKey: "StockId" });
		}
	}
	Stock.init(
		{
			stockAbbrevation: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			companyName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			currentPrice: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				validate: {
					isDecimal: true,
					min: 0,
				},
			},
			marketCap: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				validate: {
					isDecimal: true,
					min: 0,
				},
			},
		},
		{
			sequelize,
			modelName: "Stock",
		}
	);
	return Stock;
};

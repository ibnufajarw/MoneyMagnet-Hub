/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Financial extends Model {
		static associate(models) {
			Financial.belongsTo(models.User);
		}
	}
	Financial.init(
		{
			totalInvestment: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				validate: {
					isDecimal: true,
					min: 0,
				},
			},
			cashBalance: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				validate: {
					isDecimal: true,
					min: 0,
				},
			},
			UserId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Financial",
		}
	);
	return Financial;
};

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
			},
			cashBalance: {
				type: DataTypes.DECIMAL,
				allowNull: true,
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

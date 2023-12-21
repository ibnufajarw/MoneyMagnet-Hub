/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class UserStock extends Model {
		static associate(models) {
			// UserStock.hasMany(models.User);
			// UserStock.hasMany(models.Stock);
		}
	}
	UserStock.init(
		{
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					isNumeric: true,
				},
			},
		},
		{
			sequelize,
			modelName: "UserStock",
		}
	);
	return UserStock;
};

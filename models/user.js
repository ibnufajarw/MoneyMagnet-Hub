/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			User.hasMany(models.Transaction, { foreignKey: "UserId" });
			User.hasOne(models.Financial, { foreignKey: "UserId" });
			User.belongsToMany(models.Stock, {
				through: "UserStocks",
				foreignKey: "UserId",
			});
		}
	}
	User.init(
		{
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			role: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};

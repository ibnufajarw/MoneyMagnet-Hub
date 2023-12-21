/** @format */

"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

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

		async validatePassword(password) {
			return await bcrypt.compare(password, this.password);
		}
	}

	User.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [8, 255],
				},
			},
			role: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "user",
				validate: {
					isIn: [["user", "admin"]],
				},
			},
		},
		{
			sequelize,
			modelName: "User",
			hooks: {
				beforeCreate: async (user) => {
					const hashedPassword = await bcrypt.hash(user.password, 10);
					user.password = hashedPassword;
				},
			},
		}
	);

	return User;
};

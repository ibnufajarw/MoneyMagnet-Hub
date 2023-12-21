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
			},
		},
		{
			sequelize,
			modelName: "User",
			hooks: {
				beforeCreate: async (user) => {
					user.password = await bcrypt.hash(user.password, 10);
				},
			},
			instanceMethods: {
				validatePassword: async function (password) {
					return await bcrypt.compare(password, this.password);
				},
			},
		}
	);
	return User;
};

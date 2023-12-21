'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    static associate(models) {
      Stock.belongsToMany(models.UserStock, {foreignKey: "StockId"});
      Stock.belongsTo(models.Transaction, {foreignKey: "StockId"});
    }
  }
  Stock.init({
    stockAbbrevation: DataTypes.STRING,
    companyName: DataTypes.STRING,
    currentPrice: DataTypes.DECIMAL,
    marketCap: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Financial extends Model {
    static associate(models) {
      Financial.belongsTo(models.User);
    }
  }
  Financial.init({
    totalInvestment: DataTypes.DECIMAL,
    cashBalance: DataTypes.DECIMAL,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Financial',
  });
  return Financial;
};
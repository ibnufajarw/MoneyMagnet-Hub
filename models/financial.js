'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Financial extends Model {
    static associate(models) {
      Financial.hasOne(models.User, {foreignKey: "UserId"});
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
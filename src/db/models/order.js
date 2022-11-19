"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      receiverPhone: DataTypes.STRING,
      receiverFullName: DataTypes.STRING,
      receiverAddress: DataTypes.STRING,
      receiverArea: DataTypes.INTEGER,
      packageMass: DataTypes.INTEGER,
      packageUnitMass: DataTypes.STRING,
      packageLong: DataTypes.INTEGER,
      packageWidth: DataTypes.INTEGER,
      packageHeight: DataTypes.INTEGER,
      packageCod: DataTypes.INTEGER,
      packageUnitCod: DataTypes.STRING,
      packagePrice: DataTypes.INTEGER,
      freight: DataTypes.INTEGER,
      noteTransport: DataTypes.INTEGER,
      noteCode: DataTypes.STRING,
      noteMsg: DataTypes.STRING,
      senderArea: DataTypes.INTEGER,
      senderTransitAgent: DataTypes.INTEGER,
      isCancel: DataTypes.BOOLEAN,
      cancelOn: DataTypes.DATE,
      priceService: DataTypes.INTEGER,
      paymentPriceServiceStatus: DataTypes.BOOLEAN,
      paymentPriceService: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};

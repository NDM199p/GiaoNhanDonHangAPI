const db = require("../../db/models");

class OrderService {
  getOrderModel() {
    return db.Order;
  }

  getOrderDBObject() {
    return db.Order;
  }

  async save(orderObject) {
    db.Order.save();
  }

  async remove(id) {
    return await db.Order.destroy({
      where: {
        id,
      },
    });
  }

  async findAll() {
    let result = await db.Order.findAll();
    return result;
  }

  async findById(orderId) {
    let result = await db.Order.findOne({ where: { id: orderId } });
    if (!result) throw new NotFoundError("Not Found Order by orderId");
    return result;
  }

  async update(id, orderObject) {
    return await db.Order.update(orderObject, { where: { id } });
  }
}

module.exports = OrderService;

class ResponeData {
  constructor(name, code, data) {
    this.name = name;
    this.code = code;
    this.data = data;
  }
}

class CreatedResponeData extends ResponeData {}

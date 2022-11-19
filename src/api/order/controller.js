const db = require("../../db/models");
const NotFoundError = require("../../error/NotFoundError");
const PriceServiceService = require("../price_service/service");
const OrderService = require("./service");
const orderService = new OrderService();
const priceServiceService = new PriceServiceService();

class OrderController {
  static async save(req, res) {
    const requestBody = req.body;
    try {
      requestBody.priceService = priceServiceService.calculator({
        weight: requestBody.packageMass,
      });
      const result = await db.Order.create(requestBody);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async remove(req, res) {
    let orderId = req.params.id;
    try {
      let result = await orderService.remove(orderId);
      res.status(200).json(result);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  static async findAll(req, res) {
    try {
      let result = await orderService.findAll();
      res.status(200).json(result);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  static async findById(req, res) {
    const orderIdParam = req.params.id;
    try {
      let order = await orderService.findById(orderIdParam);
      res.status(200).json(order);
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(error.status).json(error);
      }
      return res.status(500).json(error);
    }
  }

  static async update(req, res) {
    let orderIdParam = req.params.id;
    let orderObject = req.body;
    try {
      let result = await orderService.update(orderIdParam, orderObject);
      return res.status(200).json(result);
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(error.status).json(error);
      }
      return res.status(500).json(error);
    }
  }

  static async cancel(req, res) {
    let orderIdParam = req.params.id;
    try {
      let result = await orderService.getOrderDBObject().update(
        { isCancel: true, cancelOn: new Date() },
        {
          where: {
            id: orderIdParam,
          },
        }
      );
      return res.status(200).json(result);
    } catch (error) {
      if (error instanceof NotFoundError) {
        return res.status(error.status).json(error);
      }
      return res.status(500).json(error);
    }
  }
}
module.exports = OrderController;

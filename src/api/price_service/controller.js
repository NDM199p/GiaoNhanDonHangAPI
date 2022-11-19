const db = require("../../db/models");
const NotFoundError = require("../../error/NotFoundError");
const PriceServiceService = require("./service");
const priceServiceService = new PriceServiceService();

class PriceServiceController {
  static getPrice = async (req, res) => {
    let { weight, height, length, width } = req.query;
    try {
      let result = {
        price: priceServiceService.calculator({ weight }),
      };
      res.status(201).json(result);
    } catch (error) {
      res.json(error);
    }
  };
}
module.exports = PriceServiceController;

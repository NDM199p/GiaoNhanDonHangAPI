const PriceServiceController = require("./controller");

module.exports = function PriceServiceRoute(app) {
  app.get("/price-service", PriceServiceController.getPrice);
};

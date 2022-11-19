const { getConnection } = require("../database/index");
const OrderController = require("./order/controller");

const routers = (app) => {
  app.get("/", (req, res) => {
    res.json({ data: "Api Giao Nhan Don Hang" });
  });

  app.get("/connect-db", async (req, res) => {
    let resData = {};
    try {
      let [rows, fields] = await getConnection.query("select now()");
      resData.data = rows;
    } catch (error) {
      resData.error = error.message;
    }
    return res.json(resData);
  });

  app.post("/order", OrderController.save);
  app.get("/orders", OrderController.findAll);
  app.put("/order/:id", OrderController.update);
  app.delete("/order/:id", OrderController.remove);
  app.get("/order/:id", OrderController.remove);
};

module.exports = routers;

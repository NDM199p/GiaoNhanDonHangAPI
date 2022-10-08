const routers = (app) => {
  app.get("/", (req, res) => {
    res.json({ data: "Api Giao Nhan Don Hang" });
  });
};

module.exports = routers;

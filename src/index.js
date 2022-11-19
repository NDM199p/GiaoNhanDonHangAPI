const express = require("express");
const routers = require("./api/routers");
const erc = require("express-routes-catalogue");
const Router = require("./router");
const app = express();
const PORT = 3000;

app.use(require("cors")());

app.use(express.json());

// routers(app);
Router(app);

// if (process.env.NODE_ENV === "development") {

erc.default.web(app, "/route-list");

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});

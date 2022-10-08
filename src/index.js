const express = require("express");
const routers = require("./api/routers");

const app = express();
const PORT = 3000;

app.use(express.json());

routers(app);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});

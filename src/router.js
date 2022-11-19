const fs = require("fs");

module.exports = function Routes(app) {
  let apiPath = __dirname + "\\api";
  fs.readdirSync(apiPath).forEach((folder) => {
    let folderPath = apiPath + "\\" + folder;
    fs.lstatSync(folderPath).isDirectory() && findAndLoadRouteJS(folderPath, app);
  });
};

function findAndLoadRouteJS(path, app) {
  // check file Route.js
  fs.readdirSync(path).forEach((file) => {
    // console.log(file);
    if (file === "Route.js") {
      let routePath = path + "/Route.js";
      //   console.log(routePath);
      require(routePath)(app);
    }
  });
}

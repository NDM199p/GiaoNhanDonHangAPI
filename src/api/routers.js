const { getConnection } = require("../database/index");
const userRouter = require("./user/router");

const routers = (app) => {
    app.get("/", (req, res) => {
        res.json({ data: "Api Giao Nhan Don Hang" });
    });

    app.get("/connect-db", async(req, res) => {
        let resData = {};
        try {
            let [rows, fields] = await getConnection.query("select now()");
            resData.data = rows;
        } catch (error) {
            resData.error = error.message;
        }
        return res.json(resData);
    });

    app.use(userRouter);
};

module.exports = routers;
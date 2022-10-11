const express = require("express");
const { getConnection } = require("../../database/index");
const router = express.Router();

router.get("/user", async(req, res) => {
    let [result] = await getConnection.query("SELECT * FROM nguoi_dung");
    res.json(result);
});

router.post("/user", async(req, res) => {
    let sql =
        "INSERT INTO nguoi_dung( firstname, lastname, email, phone, usename, hasPassword, address, city, age) VALUES( ?, ?, ?,?, ?, ?, ?, ?, ?)        ";
    let [result] = await getConnection.query(sql, [
        req.body.FirstName,
        req.body.LastName,
        req.body.Email,
        req.body.Phone,
        req.body.UseName,
        req.body.hasPassword,
        req.body.Address,
        req.body.City,
        req.body.Age,
    ]);
    res.json(result);
});

router.delete("/user", async(req, res) => {
    let sql = "DELETE FROM nguoi_dung where id=?";
    let [result] = await getConnection.query(sql, [req.body.id]);
    res.json(result);
});

router.put("/user", async(req, res) => {
    let sql = "update nguoi_dung set lastname= ?, usename= ? where id =?";
    let [result] = await getConnection.query(sql, [
        req.body.LastName,
        req.body.UseName,
        req.body.id,
    ]);
    res.json(result);
});
module.exports = router;
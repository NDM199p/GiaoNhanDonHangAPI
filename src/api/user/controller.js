"use strict";
const connection = require("../../database/connect");
const middleware = require("../../middleware");

const customersController = {
    signIn: (req, res) => {
        const hashPassword = middleware.account.generatePassword(req.body.password);
        let sql =
            "INSERT INTO Accounts (username, password, fullName, email) VALUES (?, ?, ?, ?) ";

        // simple query
        connection.query(
            sql, [req.body.username, hashPassword, req.body.fullName, req.body.email],
            function(err, results) {
                if (err) {
                    throw err;
                }
                res.send(results);
            }
        );
    },
    logIn: (req, res, next) => {
        let sql = "SELECT * FROM Accounts WHERE username=? LIMIT 1";
        // simple query
        connection.query(sql, req.body.username, async function(err, results) {
            if (err) {
                throw err;
            }
            const compare = await middleware.account.checkPassword(
                req.body.password,
                results[0].password
            );
            if (compare) {
                // Return token to user
                const data = {
                    email: req.body.email,
                    fullName: req.body.fullName,
                };
                res.send(middleware.authJwt.generateToken(data));
            } else {
                res.send("Invalid username or password!");
            }
        });
    },
};

module.exports = customersController;
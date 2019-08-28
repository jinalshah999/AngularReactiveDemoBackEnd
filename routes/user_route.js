var express = require("express");
var router = express.Router();
var User = require("../Models/user_model");

router.get("/:id?", function (req, res, next) {
    if (req.params.id) {
        User.getUserById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        User.getAllUsers(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post("/", function (req, res, next) {
    User.insertUser(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
module.exports = router;
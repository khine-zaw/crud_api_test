var express = require("express");
var router = express.Router();
var Controller = require("./controllers");

router.route("/").post(Controller.login);

module.exports = router;
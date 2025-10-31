const express = require('express');
const router = express.Router();
const controller = require("../controllers/unoController.js");

router.post("/get", controller.get);

module.exports = router;
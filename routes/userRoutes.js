/** @format */

const express = require("express");
const HomeController = require("../controllers/homeController");
const homeController = require("../controllers/homeController");
const router = express.Router();

router.get("/", HomeController.getAllStocks);
router.get("/:id", homeController.detail);

module.exports = router;

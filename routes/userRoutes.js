/** @format */

const express = require("express");
const HomeController = require("../controllers/homeController");

const router = express.Router();

router.get("/", HomeController.getAllStocks);
// router.get("/stocks/:id");

module.exports = router;

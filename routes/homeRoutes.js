/** @format */

const express = require("express");
const HomeController = require("../controllers/homeController");

const router = express.Router();

router.get("/", HomeController.getAllStocks);
// router.get("/stocks/:id");
// router.get("/stocks/add");
// router.post("/stocks/add");

module.exports = router;

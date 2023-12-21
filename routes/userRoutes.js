/** @format */

const express = require("express");
const HomeController = require("../controllers/homeController");

const router = express.Router();

router.get("/", HomeController.getAllStocks);
// router.post("/transactions", UserController.addTransaction);

module.exports = router;

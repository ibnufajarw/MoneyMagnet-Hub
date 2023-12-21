/** @format */

const express = require("express");
const router = express.Router();
const HomeRoutes = require("./userRoutes");

router.get("/", (req, res) => {
	res.redirect("/stocks");
});

// const { User, Stock } = require("../models");
// router.get("/stocks", async (req, res) => {
// 	console.log("ABC");
// 	const a = await Stock.findAll();
// 	res.send(a);
// });
router.use("/stocks", HomeRoutes);

module.exports = router;
const express = require("express");
const router = express.Router()
const Controller = require('../controllers/index');

router.get(`/`, Controller.home);


module.exports = router;
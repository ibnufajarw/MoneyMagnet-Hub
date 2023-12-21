/** @format */

const express = require("express");
const router = express.Router();
const HomeRoutes = require("./userRoutes");

router.get("/", (req, res) => {
	res.redirect("/stocks");
});

router.use("/stocks", HomeRoutes);

module.exports = router;
const express = require("express");
const router = express.Router()
const Controller = require('../controllers/index');

router.get(`/`, Controller.home);


module.exports = router;
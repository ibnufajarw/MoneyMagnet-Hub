/** @format */

const express = require("express");
const router = express.Router();
const HomeRoutes = require("./userRoutes");

router.get("/", (req, res) => {
	res.redirect("/stocks");
});

router.use("/stocks", HomeRoutes);

module.exports = router;

/** @format */

const express = require("express");
const router = express.Router();
const HomeRoutes = require("./homeRoutes");

router.get("/", (req, res) => {
	res.redirect("/stocks");
});

router.use("/stocks", HomeRoutes);

module.exports = router;

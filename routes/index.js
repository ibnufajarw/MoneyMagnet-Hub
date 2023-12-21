/** @format */

const express = require("express");
const router = express.Router();
const HomeRoutes = require("./homeRoutes");
const addStock = require("./addStock");
const Login = require("./loginRoutes");
const Register = require("./registerRoutes");
const Logout = require("./logoutRoutes");

router.get("/", (req, res) => {
	res.redirect("/stocks");
});

router.use("/stocks", HomeRoutes);
router.use("/add", addStock);
router.use("/login", Login);
router.use("/register", Register);
router.use("/logout", Logout);

module.exports = router;

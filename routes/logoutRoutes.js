/** @format */

const router = require("express").Router();
const Logout = require("../controllers/authController");

router.get("/", Logout.getLogout);

module.exports = router;

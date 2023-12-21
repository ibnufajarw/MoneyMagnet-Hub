/** @format */

const router = require("express").Router();
const Login = require("../controllers/authController");

router.get("/", Login.getLogin);
router.post("/", Login.postLogin);

module.exports = router;

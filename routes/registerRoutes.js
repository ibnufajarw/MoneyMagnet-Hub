/** @format */

const router = require("express").Router();
const Register = require("../controllers/authController");

router.get("/", Register.getRegister);
router.post("/", Register.postRegister);

module.exports = router;

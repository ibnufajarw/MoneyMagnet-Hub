/** @format */

const express = require("express");
const FinancialController = require("../controllers/financialController");

const router = express.Router();

router.get("/", FinancialController.getFinancial);

module.exports = router;

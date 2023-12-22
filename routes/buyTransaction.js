/** @format */

const express = require("express");
const router = express.Router();
const Transaction = require("../controllers/transactionController");

router.post("/", Transaction.buyStock);

module.exports = router;

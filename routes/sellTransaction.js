/** @format */

const express = require("express");
const router = express.Router();
const Transaction = require("../controllers/transactionController");

router.post("/", Transaction.sellStock);

module.exports = router;

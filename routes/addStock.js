/** @format */

const express = require("express");
const addController = require("../controllers/addController");

const router = express.Router();

router.get("/", addController.getAdd);
router.post("/", addController.postAdd);

module.exports = router;

const express = require("express");
const router = express.Router()
const Controller = require('../controllers/index');

router.get(`/`, Controller.home);


module.exports = router;
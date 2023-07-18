const express = require("express");
const { newAnswer } = require("../controllers/answer.controller");
const validateToken = require("../utils/middlewares/validateToken");
const validateUserId = require("../utils/middlewares/validateUserId");
const router = express.Router();

router.post("/new-answer", validateToken, validateUserId, newAnswer);


module.exports = router;

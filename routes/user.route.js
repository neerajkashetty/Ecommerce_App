const express = require("express");
const { getUserInfo } = require("../controllers/user.controller");
const validateToken = require("../utils/middlewares/validateToken");
const validateUserId = require("../utils/middlewares/validateUserId");
const router = express.Router();

router.get("/user-info", validateToken, validateUserId, getUserInfo);


module.exports = router;

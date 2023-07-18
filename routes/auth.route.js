const express = require("express");
const { signUp, signIn } = require("../controllers/auth.controller");
const checkUser = require("../utils/middlewares/checkUser");

const router = express.Router();

router.post("/sign-up", checkUser, signUp);

router.post("/sign-in", signIn);

module.exports = router;

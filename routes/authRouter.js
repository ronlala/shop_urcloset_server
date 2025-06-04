const express = require("express");

const router = express.Router();

const { register, login, logout, localLogin } = require("../controllers/authcontroller");


router.post("/register", register);

router.get("/login", login);

router.get("/login/error", (request, response, next) => {
    return response.json("Login has an error");
})
router.get("/login/local", localLogin);

router.get("/logout", logout);
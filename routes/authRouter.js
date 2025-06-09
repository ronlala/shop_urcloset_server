const express = require ("express");
const passport = require ("passport");
const router = express.Router();

const {register, login , logout, localLogin} = require("../controllers/authcontroller");

router.post("/register", register);
router.get("/login", login);

router.get("/login/error",(req,res,next) => {
    return res.json("Error with Login");
});
router.get("/login/local", localLogin);
router.get("/logout",logout);

router.get("/login/google",
    passport.authenticate("google",{scope:["profile","email"]})
);
router.get("/auth/google/callback",
    passport.authenticate("google",{
        failureRedirect: "/login",
        successRedirect: "/dashboard",
    })
);
module.exports = router;
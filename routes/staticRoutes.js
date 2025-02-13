const express = require("express");
const passport = require("passport");

const router=express.Router()


router.get("/",async (req,res)=>{
    res.render("intro");
})

router.get("/signup",async (req,res)=>{
    res.render("signupPage");
})


//To signup and login using google
router.get("/auth/google", passport.authenticate("google", {scope: ["profile", "email"]}));

router.get("/auth/google/callback", passport.authenticate("google", {failureRedirect: "/signup"}), (req,res)=> {
    res.redirect("/login");
})

router.get("/login", (req, res) => {
    res.send(`Welcome`);
})

router.get("/logout", (req, res)=>{
    req.logOut(() => {
        res.redirect("/");
    })
})

module.exports=router;
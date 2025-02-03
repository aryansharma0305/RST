const express = require("express");

const router=express.Router()


router.get("/",async (req,res)=>{
    res.render("intro");
})

router.get("/signup",async (req,res)=>{
    res.render("signupPage");
})


module.exports=router;
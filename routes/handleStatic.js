const express = require("express");

const router=express.Router()



// router.post("/signup",async (req,res)=>{

//     //signupLogic

//     res.redirect("/login");
// })

const {handleUserSignup} = require("../controllers/handleSignup");
router.post("/signup", handleUserSignup);

module.exports=router;
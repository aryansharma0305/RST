const User = require("../models/user");
const {setMember} = require("../services/authentication");

async function handleUserLogin(req, res){
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email, password});
        if(!user) return res.status(400).redirect("/user/login?Error Invalid Username or Password");
    
        const token = setMember(user);
        res.cookie("uid", token);
        res.redirect("/home");
    }catch(error){
        console.error("Error during user login:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    handleUserLogin
};
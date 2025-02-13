const User = require("../models/user");


async function handleUserSignup(req, res){
    try{
        const { username, email, password} = req.body;
        await User.create({
            username: username,
            email: email,
            password: password,
        })
        res.redirect("/login");
    }catch(error){
        console.error("Error during user signup:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    handleUserSignup
};
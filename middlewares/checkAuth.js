const { getMember } = require("../services/authentication");

function checkAuth(req, res, next){
    try{
        const uuid = req.cookies?.uid;
        const user = getMember(uuid);
        req.user = user;
        next();
    }catch(error){
        console.error("Error during user authentication:", error);
        res.status(500).send("Internal Server Error");
    }
    
}

module.exports = { checkAuth };
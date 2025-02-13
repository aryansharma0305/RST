const jwt = require("jsonwebtoken");
const secret = "Hopfield Dempster-Shafer Hypothesis";


//Setting up token for new member
function setMember(member){
    return jwt.sign({
        _id: member._id,
        email: member.email,
        role: member.role
    },
        secret,
    )
}


//Checking token to find out existing user or not
function getMember(token){
    if(!token) return null;
    try{
        return jwt.verify(token, secret);
    }catch(error){
        return null;
    }
}

module.exports = { 
    getMember,
    setMember
}
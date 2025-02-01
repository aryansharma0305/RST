const mongoose = require("mongoose");

async function connectToDb(url){
    try{
        await mongoose.connect(url)
     }
     catch(error){
         console.log("ERROR : ",error)
         process.exit(1)
     }
}

module.exports = {connectToDb};
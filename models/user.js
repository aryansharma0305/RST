const mongoose=require("mongoose");

// REQUIRED FIELDS : username , name , email , password , country
// OPTIONAL FILEDS : rating2 , rating4 , rating6 , age , PFP ID , gender , friends


const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true, 
    },
    name: {
      type: String,
      required: true,
    },
    email: {
        type:String,
        required: true,
        unique:true
    },
    password: {
      type: String,
      required: true,
    },
    rating2:{
        type:Number,
        default: 400
    },
    rating4:{
        type:Number,
        default: 400
    },
    rating6:{
        type:Number,
        default: 400
    },
    age:{
        type:Number
    },
    profilePictureID:{
        type:String,
    },
    gender:{
        type:String,
    },
    friends:{
        type:[String],
    },
    country:{
        type:String,
        required:true,
    }
  });
  
  const users = mongoose.model('users', userSchema);
  module.exports = users;
const express = require("express");
const PORT = 8000;
const path = require("path");
const {connectToDb} = require("./connection.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();


//Connecting to mongoDb
connectToDb("mongodb://127.0.0.1:27017/RST")
.then(()=> console.log("Connected to Db!"))
.catch((err) => console.log("Couldn't connect due to" + err));



//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


//Connect to View Engine
app.set('view engine','ejs');
app.set("views", path.resolve("./views"));
app.use(express.static(__dirname+'/public'));






//ROUTES




//Running
app.listen(PORT, ()=> console.log(`Server is running at PORT ${PORT}`));








//aaded this from Github



// Added this line




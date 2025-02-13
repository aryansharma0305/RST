//For storing essential data
require("dotenv").config();

const express = require("express");

const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const PORT = process.env.PORT || 8004;
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
// app.use(cookieParser());
app.use(session({
    secret: "hello",
    resave: false,
    saveUninitialized: true
}))


//Initializing passport for authentication
app.use(passport.initialize());
app.use(passport.session());


//Create google strategy
passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8000/auth/google/callback",
    }, 
    (accessToken, refreshToken, profile, done) => {
        return done(null, profile);
    })
)

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


//Connect to View Engine
app.set('view engine','ejs');
app.set("views", path.resolve("./views"));
app.use(express.static(__dirname+'/public'));





//ROUTES
const staticRouter = require("./routes/staticRoutes.js")
app.use('/',staticRouter);

const handleStaticRouter = require("./routes/handleStatic.js");
const { access } = require("fs");
const { checkAuth } = require("./middlewares/checkAuth.js");
app.use('/',checkAuth, handleStaticRouter);


//Running
app.listen(PORT, ()=> console.log(`Server is running at PORT ${PORT}`));








//aaded this from Github



// Added this line




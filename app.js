//entrypoingt requirement
require("dotenv").config();
require("./config/connection");
require("./config/autherizerStragey.js");

const session = require("express-session");
const passport = require("passport");

const express = require("express");
const app = express();


const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require ("node:path");

// const for clothingRoutes 

const clothRoutes = require("./routes/clothRoutes.js");

const PORT = process.env.PORT || 8080

//middleware section 

app.use(cors({credentials: true, origin: true}));
app.use(morgan("dev"));
app.use(helmet());
app.use (express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname+"/public")));
app.use("/api/closet",clothRoutes);


//initialize passport ... routes after this
 
// error handeling 


app.use((err,req,res,next) =>{
   if (err.code === 11000){
    return res.status(err.status || 400).json({
      error:{message: "Already have an account? Try Logging in."},
      statusCode: err.status || 400,
    });
  }
  return res.status(err.status || 500).json({
    error:{message: err.message || "Internal server error."},
    statusCode: err.status || 500,
  });
});
// Port listen 
app.listen(PORT,() =>{
      console.log(`Server is listening on port ${PORT},Connection has been established`);
      console.log(`http://localhost:${PORT}/`)
    });
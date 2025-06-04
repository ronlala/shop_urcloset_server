//entrypoingt requirement
require("dotenv").config();
require("./config/connection");



const express = require("express");
const app = express();
// const for clothingRoutes 

const clothRoutes = require("./routes/clothRoutes.js");


const PORT = process.env.PORT 

// require the following dependencies 
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

//middleware section 

app.use(cors({credentials: true, origin: true}));
app.use(morgan("dev"));
app.use(helmet());
app.use (express.json());
app.use(express.urlencoded({extended:true}));
 


    app.listen(PORT,() =>{
      console.log(`Server is listening on port ${PORT},Connection has been established`);
      console.log(`http://localhost:${PORT}/`)
    });
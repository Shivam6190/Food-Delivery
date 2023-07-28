const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const mongoose = require("mongoose");  //required for connecting to database.


const app = express();

app.use(cors());

mongoose.connect("mongodb+srv://user786:restaurant123@restaurants.qwdxnj0.mongodb.net/");

const db = mongoose.connection;

db.on("error",()=>{
    console.log("Error in connecting to database");
})

db.on("open",()=>{
    console.log("Connected to database");
})

app.use(bodyParser.json());

app.listen("8000", () =>{
    console.log("Server is listening on port 8000")
});

require(path.join(__dirname,"./Routes/restaurants.routes"))(app); //trigger point: starting point of the server.









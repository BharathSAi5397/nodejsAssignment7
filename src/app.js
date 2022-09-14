const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/MarioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

//importing routes
const marioRoutes=require("./routes/user")
app.use("/mario",marioRoutes)






module.exports = app;
var express = require("express");
var path = require("path");
var passport = require('passport');
var session = require('express-session');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var morgan = require('morgan')
require("dotenv").config();

var index = require("./routes/index");
var db = require("./db");
var port = process.env.PORT || 8080;

var app = express();

// View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(morgan("dev"));

app.use(session({secret: "superSecretKey"}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", index);

// Start MongoDB
db.connect(process.env.DB_URL, function(err){
  if(err){
    console.log("Unable to connect to MongoDB");
    process.exit(1);
  }else{
    // Start server
    app.listen(port, function(){
      console.log("App listening on port", port);
    });
  }
});
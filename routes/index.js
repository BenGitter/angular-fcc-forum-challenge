var express = require("express");
var router = express.Router();
var passport = require('passport');
var api = require("./api");
var db = require("../db");
// require("dotenv").config();

router.get("/", function(req, res){
  res.render("index.html");
});

router.get("/close", function(req, res){
  res.render("close.html");
});

// Start the GitHub Login process
router.get('/auth/github', passport.authenticate('github'));

// GitHub will call this URL
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {

    // Check if user is already in db
    db.findUser(req.user._json.id, function(err, doc){
      if(err) return err;

      // If not: add user to db
      if(!doc){
        db.addUser(req.user._json, function(err, doc){
          if(err) return err;

          console.log("Following document is added", JSON.stringify(doc));

          res.redirect("/close");
        });
      }else{
        console.log("User already exists");
        req.session.passport.user.isRunning = doc.isRunning;
        res.redirect("/close");
      }
    });
  }
);

// Logout route
router.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/api');
});

// API
router.use("/api", api);


module.exports = router;

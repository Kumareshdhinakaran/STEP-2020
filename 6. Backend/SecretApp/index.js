const { urlencoded } = require("body-parser");

var express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  localStrategy = require("passport-local"),
  localMongoose = require("passport-local-mongoose"),
  User = require("./models/user"),
  port = 5000;
mongoose.connect("mongodb://localhost:27017/demo_auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var app = express();
app.set("view engine", "ejs");
app.use(
  require("express-session")({
    secret: "hello world",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(bodyParser, urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//  ##########################
//           Routes
//  #########################

//Home route
app.get("/", function (req, res) {
  res.render("home");
});

//Secret route
app.get("/secrets", function (req, res) {
  res.render("secrets");
});

//Server listening
app.listen(port, function () {
  console.log("server started succesfully");
});

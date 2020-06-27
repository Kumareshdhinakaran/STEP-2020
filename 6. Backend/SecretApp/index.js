const {
  urlencoded
} = require("body-parser");

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
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
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
app.get("/secrets", isLoggedIn, function (req, res) {
  res.render("secrets");
});


//Auth routes
app.get("/register", function (req, res) {
  res.render("register");
})

app.post("/register", function (req, res) {
  User.register(new User({
    username: req.body.username
  }), req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function () {
      res.redirect("/secrets");
    })
  });
})

app.get("/login", function (req, res) {
  res.render("login");
})

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  }),
  function (req, res) {}
);


//Logout route
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});


//middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
//Server listening
app.listen(port, function () {
  console.log("server started succesfully");
});
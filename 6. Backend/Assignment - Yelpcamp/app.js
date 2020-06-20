var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  port = 5000,
  mongoose = require("mongoose"),
  Campground = require("./models/campground"),
  Comment = require("./models/comments"),
  seedDB = require("./seed");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
seedDB();
app.use(express.static(__dirname + "/public"));
console.log(__dirname);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/campgrounds", function (req, res) {
  Campground.find({}, function (err, allCampGrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campground/index", { data: allCampGrounds });
    }
  });
});

app.post("/campgrounds", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCamp = { name: name, img: image, description: description };
  Campground.create(newCamp, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully added");
    }
  });
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
  res.render("campground/newcamp");
});

app.get("/campgrounds/:id", function (req, res) {
  Campground.findById(req.params.id)
    .populate("comments")
    .exec(function (err, campGround) {
      if (err) {
        console.log(err);
      } else {
        res.render("campground/show", { data: campGround });
      }
    });
});

/* ======================================================== */
//              Comment's Route
/* ======================================================== */

app.get("/campgrounds/:id/comments/new", function (req, res) {
  Campground.findById(req.params.id, function (err, campGround) {
    if (err) {
      console.log(err);
    } else {
      res.render("comment/newcomment", { data: campGround });
    }
  });
});
app.post("/campgrounds/:id/comments", function (req, res) {
  //lookup campground using id
  Campground.findById(req.params.id, function (err, campGround) {
    if (err) {
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      Comment.create(req.body.comment, function (err, newComment) {
        if (err) {
          console.log(err);
        } else {
          campGround.comments.push(newComment);
          campGround.save();
          res.redirect(`/campgrounds/${req.params.id}`);
        }
      });
    }
  });
  // create new comment
  // connect new comment to the campground
  //redirect to url
});
app.listen(port, function () {
  console.log("Server started Successfully");
});

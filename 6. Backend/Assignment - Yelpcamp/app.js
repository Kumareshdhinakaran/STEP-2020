var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  port = 5000,
  mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var campgroundSchema = new mongoose.Schema({
  name: String,
  img: String,
  description: String,
});

var campground = mongoose.model("Campground", campgroundSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/campgrounds", function (req, res) {
  campground.find({}, function (err, allCampGrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds", { data: allCampGrounds });
    }
  });
});

app.post("/campgrounds", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCamp = { name: name, img: image, description: description };
  campground.create(newCamp, function (err, campGround) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully added");
      console.log(campGround);
    }
  });
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
  res.render("newcamp");
});

app.get("/campgrounds/:id", function (req, res) {
  var newId = mongoose.Types.ObjectId(req.params.id);
  campground.find({ _id: newId }, function (err, campGround) {
    if (err) {
      console.log(err);
    } else {
      console.log(campGround);
      res.render("description", { data: campGround[0] });
    }
  });
});
app.listen(port, function () {
  console.log("Server started Successfully");
});

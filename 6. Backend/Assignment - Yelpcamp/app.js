var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/campgrounds", function (req, res) {
  var campGrounds = [
    {
      name: "Salmon creek",
      img:
        "http://www.abutimes.com/wp-content/uploads/2014/07/lantern-campsite-mount-abu.jpg",
    },
    {
      name: "Granite Hill",
      img:
        "https://pix6.agoda.net/hotelImages/6425194/-1/18f40048a640be5daf4c6dd1ff4bf0b6.jpg?s=1024x768",
    },
    {
      name: "Mountain Goat",
      img:
        "https://pawnacamp.com/wp-content/uploads/2018/01/Pawna-lake-camping-camp-F-new.jpg",
    },
  ];

  res.render("campgrounds", { data: campGrounds });
});

app.listen(5000, function () {
  console.log("Server started Successfully");
});

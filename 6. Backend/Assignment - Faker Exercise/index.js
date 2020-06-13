var express = require("express");
var app = express();
var faker = require("faker");

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var details = {};
  for (var i = 0; i < 10; i++) {
    details[faker.commerce.productName()] = faker.commerce.price();
  }
  res.render("index", { data: details });
});
app.listen(5000, function () {
  console.log("Server started succesfully");
});

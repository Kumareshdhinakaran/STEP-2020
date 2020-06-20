var mongoose = require("mongoose"),
  Campground = require("./models/campground"),
  Comment = require("./models/comments");
data = [
  {
    name: "Cloud's Rest",
    img:
      "https://images.unsplash.com/photo-1520095972714-909e91b038e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Lorem, ipsum dolor sit amet consectetur \
          adipisicing elit. Delectus adipisci natus harum quisquam, suscipit aperiam \
          minus. Minima sint nostrum praesentium, inventore eveniet ullam non, libero \
          expedita quod unde doloribus nisi, id voluptatem quisquam! Aliquid, aperiam quam\
          alias itaque voluptatem, non fugiat quis error harum ratione perspiciatis.",
  },
  {
    name: "Camp Fire",
    img:
      "https://images.unsplash.com/photo-1517771778436-39f5763f5270?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Lorem, ipsum dolor sit amet consectetur \
          adipisicing elit. Delectus adipisci natus harum quisquam, suscipit aperiam \
          minus. Minima sint nostrum praesentium, inventore eveniet ullam non, libero \
          expedita quod unde doloribus nisi, id voluptatem quisquam! Aliquid, aperiam quam\
          alias itaque voluptatem, non fugiat quis error harum ratione perspiciatis.",
  },
  {
    name: "Mountain's Wall",
    img:
      "https://images.unsplash.com/photo-1533632359083-0185df1be85d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Lorem, ipsum dolor sit amet consectetur \
          adipisicing elit. Delectus adipisci natus harum quisquam, suscipit aperiam \
          minus. Minima sint nostrum praesentium, inventore eveniet ullam non, libero \
          expedita quod unde doloribus nisi, id voluptatem quisquam! Aliquid, aperiam quam\
          alias itaque voluptatem, non fugiat quis error harum ratione perspiciatis.",
  },
  {
    name: "Forest Fire",
    img:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Lorem, ipsum dolor sit amet consectetur \
          adipisicing elit. Delectus adipisci natus harum quisquam, suscipit aperiam \
          minus. Minima sint nostrum praesentium, inventore eveniet ullam non, libero \
          expedita quod unde doloribus nisi, id voluptatem quisquam! Aliquid, aperiam quam\
          alias itaque voluptatem, non fugiat quis error harum ratione perspiciatis.",
  },
];

function seedDB() {
  //Remove all campgrounds
  Campground.deleteMany({}, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("removed sucessfully");
      Comment.deleteMany({});
      //add new campgrounds
      data.forEach((element) => {
        Campground.create(element, function (err, campGround) {
          if (err) {
            console.log(err);
          } else {
            console.log("added successfully");
            //create a comment
            Comment.create(
              {
                author: "Jeunesse",
                text:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci natus harum quisquam, suscipit aperiam minus. Minima sint nostrum praesentium, inventore eveniet ullam non, libero",
              },
              function (err, comment) {
                if (err) {
                  console.log(err);
                } else {
                  campGround.comments.push(comment);
                  campGround.save();
                  console.log("Comment added succesfully");
                }
              }
            );
          }
        });
      });
    }
  });
}
module.exports = seedDB;

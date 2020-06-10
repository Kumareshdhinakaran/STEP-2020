//Crossing the completed tasks
$("ul").on("click", "li", function () {
  $(this).toggleClass("change");
});

//Deleting the added task
$("ul").on("click", "i", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

//Adding new todo to the list
$("input[type='text']").on("keypress", function (event) {
  if (event.which === 13) {
    var value = $(this).val();
    $(this).val("");
    $("ul").append(`<li><i class="fa fa-trash"></i> ${value}</li>`);
  }
});

//Toggling input bar when clicking on it.
$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});

$("h1").css("color", "brown");

// Selecting elements
$("h1");
$("button");

// Manipulating Style
$("h1").css("color", "red");

// Manipulating Text
$("h1").text("Good Bye");
$("button").text("Don't Click Me");

// Manipulating Attributes
$("img").attr("src");
$("a").attr("href", "https://www.yahoo.com");

// Adding Event Listeners
$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

// Adding and Removing Elements
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
$("button").remove();

// Animations
$("button").on("click", function () {
  $("h1").hide();
});

$("button").on("click", function () {
  $("h1").toggle();
});

$("button").on("click", function () {
  $("h1").fadeOut();
});

$("button").on("click", function () {
  $("h1").fadeToggle();
});

$("button").on("click", function () {
  $("h1").slideUp();
});

$("button").on("click", function () {
  $("h1").slideToggle();
});

$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 });
});

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});

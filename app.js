// $(document).ready(() => {
//   $(".myLink").on("click", () => {
//     //     $("h1").addClass("red");
//     //     $("h2").fadeOut(500);
//     //     $("h1").slideToggle(500);
//   });
//   $(".myLink").click(() => {
//     $("h1").text("Hello!");
//     $("h3").html("<h2> What? </h2>");
//     $("h1").css("font-size", "140px");
//   });
// });

// jQuery

$(document).ready(() => {
  // Set Variables
  var speed = 500; // fade speed
  var autoSwitch = true; // auto slider option
  var autoSwitchSpeed = 3000; // auto slider speed

  // add initial active class
  $(".slide").first().addClass("active");

  // hide all slides
  $(".slide").hide();

  // show first slide
  $(".active").show();

  // click to go next
  $("#next").on("click", () => {
    $(".active").removeClass("active").addClass("oldActive");
    if ($(".oldActive").is(":last-child")) {
      $(".slide").first().addClass("active");
    } else {
      $(".oldActive").next().addClass("active");
    }
    $("oldActive").removeClass("oldActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  });

  // click to go prev
  $("#prev").on("click", () => {
    $(".active").removeClass("active").addClass("oldActive");
    if ($(".oldActive").is(":first-child")) {
      $(".slide").last().addClass("active");
    } else {
      $(".oldActive").prev().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  });

  if (autoSwitch == true) {
    setInterval(() => {
      $(".active").removeClass("active").addClass("oldActive");
      if ($(".oldActive").is(":last-child")) {
        $(".slide").first().addClass("active");
      } else {
        $(".oldActive").next().addClass("active");
      }
      $("oldActive").removeClass("oldActive");
      $(".slide").fadeOut(speed);
      $(".active").fadeIn(speed);
    }, autoSwitchSpeed);
  }
});

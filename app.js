$(document).ready(() => {
  $(".myLink").on("click", () => {
    //     $("h1").addClass("red");
    //     $("h2").fadeOut(500);
    //     $("h1").slideToggle(500);
  });
  $(".myLink").click(() => {
    $("h1").text("Hello!");
    $("h3").html("<h2> What? </h2>");
    $("h1").css("font-size", "140px");
  });
});

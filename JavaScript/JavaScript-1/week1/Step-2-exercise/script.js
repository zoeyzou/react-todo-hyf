$(document).ready(function() {
  $("h1").addClass("animated lightSpeedIn");
  $("h2").addClass("animated infinite pulse");
  $("#b1").click(function() {
    $("#s1").fadeIn("slow");
  });
  $("#b2").click(function() {
    $("#s2").fadeOut("slow");
  });
  $("#b3").click(function() {
    $("#s3").slideDown("slow");
  });
  $("#b4").click(function() {
    $("#s4").slideUp("slow");
  });
});
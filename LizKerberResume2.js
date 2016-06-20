$(document).ready(function() {
  $("body").on("click", "button", function() {
    $("button").hide();
    $("#resume").slideDown("slow");
  });
});

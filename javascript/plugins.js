// jQuery
/* $("document").ready(function(){
  alert("hello world from jQuery");
  $("img").css("border", "3px solid green");
  $("img:lt(5)").css("border", "3px solid green");
  $("li").css("border", "3px solid green");
  $("li a").css("background-color", "red");
  $("img:nth-child(2n)").css("border", "5px solid green");
  $("img").slideUp(2000);
}); */

/* $("document").ready(function(){
  $("img").not(".robots").addClass("error");
}); */

/* $("document").ready(function(){
  var firstImage = $("#drawing:first-child");
  firstImage.next().addClass("error");
}); */

// Week 6 jQuery homework
/* $("document").ready( function(){
  $(".tab-panels .tabs li").on("click", function(){
    $(".tab-panels .tabs li.active").removeClass("active");
    $(this).addClass("active");
    var panelToShow = $(this).attr("rel");
    $(".tab-panels .panel.active").slideUp(300, function(){
      $(this).removeClass("active");
      $("#"+panelToShow).slideDown(300, function(){
        $(this).addClass("active");
      });
    });
  });
}); */

// Greensock Functions
$("document").ready(function(){
  var spinSpeed = 5;
  var myTimeline = new TimelineLite();
  myTimeline.from("header", spinSpeed, {x:500, ease:Bounce.easeOut});
  myTimeline.from("nav", spinSpeed, {x: 500, ease:Bounce.easeOut});
  myTimeline.from("#drawing", spinSpeed, {x: 500, ease:Bounce.easeOut})
  myTimeline.from("#water-color", spinSpeed, {x: 500, ease:Bounce.easeOut})
  myTimeline.from("#oil", spinSpeed, {x: 500, ease:Bounce.easeOut})
  myTimeline.from("aside", spinSpeed, {x: 500, ease:Bounce.easeOut})
});
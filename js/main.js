$(document).ready(function(){
  $("nav ul li").hover(function(){
    $(".dep02").stop().slideDown(); 
    $(".subbg").stop().slideDown();
});
$("header").mouseleave(function(){
  $(".dep02").stop().slideUp();
  $(".subbg").stop().slideUp();
});
  
  $(".renewal > div").hide();
  $(".renewal > div:first").show();
  var $tablink = $(".tab div").click(function(){
    var idx=$tablink.index(this);
    $(".tab div").removeClass("active")
    $(".tab div").eq(idx).addClass("active");
    $(".renewal > div").hide();
    $(".renewal > div").eq(idx).show();
  });

  $('.top').click(function(){
    $('html, body').animate({"scrollTop":0}); 
  });
  
});

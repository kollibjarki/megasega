$('.ourGames').hover(function() {
  $(this).css("cursor", "pointer");
  $(this).animate({
      left: "-=50px",
      width: "140%",
      height: "140%"
  }, 'fast');

}, function() {
  $(this).animate({
      width: "100%"
  }, 'slow', function() { $(this).removeAttr('style'); } );

});
$('.ourGames').bind('mouseenter mouseleave', function() {
    $(this).attr({
        src: $(this).attr('data-other-src')
        , 'data-other-src': $(this).attr('src')
    })
});

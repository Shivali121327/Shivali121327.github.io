$(document).ready(function() {
  $('#demo').Morphext({
	  // animation settings.
	  animation: "zoomIn",
	  // custom separator
	  separator: ",",
	  // animation speed
	  speed: 4000,
	  // callback
	  complete: $.noop
	});
	$('body').scrollspy({ target: '#navbar-example' })
	$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
  })
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
});
new WOW().init();
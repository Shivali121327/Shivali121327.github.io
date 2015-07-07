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
	$(function(){
    $(".nav a").click(function(e){
      e.preventDefault();
      $('html,body').scrollTo(this.hash,this.hash); 
    });
  });
	$('body').scrollspy({ target: '#navbar-example' })
	$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
  })
});
new WOW().init();
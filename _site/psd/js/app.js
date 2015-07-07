$(document).ready(function() {
  $('#logo').click(function() {
    if ($('#text header').hasClass('active')) {
        $('#logo').removeClass('fa-times').addClass('fa-circle-o');
        $('#text header').removeClass('active');
    } else {
        $('#logo').removeClass('fa-circle-o').addClass('fa-times');
        $('#text header').addClass('active');    
    }
    
  })

  // $('#carousel-example-generic').carousel({interval: 300})    
})

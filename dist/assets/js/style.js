
// Animate between signup and signin page
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

// hide login notification after some time
$(function() {
    setTimeout(function() {
        $("#notMessage").fadeOut('fast');
    }, 3000);
});
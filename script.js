$( document ).ready(()=>{
// console.log('connected')

$("#homeLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 2000, 'easeOutExpo');
});


$("#projectsLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 2000, 'easeOutExpo');
});

$("#aboutLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutmeDiv").offset().top
    }, 2000, 'easeOutExpo');
});

$("#more").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 2000, 'easeOutExpo');
});

/* Media Query Contact link */
if ($(window).width() > 700) {
    $("#contactLink").click(function() {
        $('html, body').animate({
            scrollTop: $("#contactLand").offset().top
        }, 2000, 'easeOutExpo');
    });

} else {
     $("#contactLink").click(function() {
        $('html, body').animate({
            scrollTop: $("#mediaContact").offset().top
        }, 2000, 'easeOutExpo');
    });

};//end media query







});


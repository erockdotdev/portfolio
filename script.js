$( document ).ready(()=>{
console.log('connected')

$("#homeLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 2000, 'easeOutExpo');
});


$("#projectsLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#projectsDiv").offset().top
    }, 2000, 'easeOutExpo');
});

$("#aboutLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutmeDiv").offset().top
    }, 2000, 'easeOutExpo');
});

$("#more").click(function() {
    $('html, body').animate({
        scrollTop: $("#projectsDiv").offset().top
    }, 2000, 'easeOutExpo');
});

$("#contactLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactLand").offset().top
    }, 2000, 'easeOutExpo');
});




});


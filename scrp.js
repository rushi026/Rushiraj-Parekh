$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scrollup').addClass("show");
            console.log("done");
        } else{
            $('.scrollup').removeClass("show");
        }
    });

    // slide up script
    $('.scrollup').click(function(){
        $('html').animate({scrollTop: 0});
    });

    
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    // typing animation
    var typed = new Typed(".typing", {
        strings: ["Programmer", "Developer", "Designer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true 
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["Programmer", "Developer", "Designer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true 
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

});
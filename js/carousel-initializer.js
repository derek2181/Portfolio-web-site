$(document).ready(function(){
    var firstCarousel= $(".technologies-owl");
    var secondCarousel=$(".projects-web");
    var thirdCarousel=$(".projects-mobile");
    firstCarousel.owlCarousel({
        loop:true,
        autoplay:false,
        autoplaySpeed:2000,
        autoplayTimeout : 7400,
        infiniteLoop:true,
        touchDrag:true,
        mouseDrag:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false,
                loop:true,
     
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });



    secondCarousel.owlCarousel({
        loop:true,
        autoplay:false,
        autoHeight:true,
        autoplaySpeed:1500,
        autoplayTimeout : 10000,
        infiniteLoop:true,
        touchDrag:true,
        mouseDrag:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:true,
                dots:true
            }
        }
    });
    thirdCarousel.owlCarousel({
        loop:true,
        autoplay:true,
        autoHeight:true,
        autoplaySpeed:1500,
        autoplayTimeout : 10000,
        infiniteLoop:true,
        touchDrag:true,
        mouseDrag:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
                loop:true,
                dots:true
            }
        }
    });
  });
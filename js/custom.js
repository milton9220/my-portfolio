$(document).ready(function(){

  var typed = new Typed('#type', {
    strings:[
        "I am Monjur Hasan",
        
    ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1500,
    loop:true
  });

  
  $('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
});


let nav_offset_top = $('.header-area').height() + 50;

function navbarFixed() {
    if ($('.header-area').length) {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $('.header-area .main-menu').addClass('navbar_fixed');
                
                
            } else {
                $('.header-area .main-menu').removeClass('navbar_fixed');
                
            }
        })
    }
}

navbarFixed();
    
        
  
  });
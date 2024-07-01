$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        dots:true,
        smartSpeed:500,
        margin:20,
    });
  });

// Animation
new WOW().init();

// menu
let menutoggle = document.querySelector('.toggle');
    menutoggle.onclick = function () {
      menutoggle.classList.toggle('active')
    }
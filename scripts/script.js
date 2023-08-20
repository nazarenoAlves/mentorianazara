const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });
 

window.addEventListener('scroll', function() {
    var fadeInElements = document.querySelectorAll('.fade');
    for (var i = 0; i < fadeInElements.length; i++) {
       var element = fadeInElements[i];
       var position = element.getBoundingClientRect().top;
       var windowHeight = window.innerHeight;
       if (position < windowHeight) {
          element.style.opacity = "1";
       }
    }
 });


 
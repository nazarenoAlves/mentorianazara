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
 
let slideInt = 1;
let nextSlide = 2;

function startSlideshow() {
  // show the first image immediately
  $('#slide-img-' + slideInt).show();

  // Get count of all the images inside the slideshow
  let count = $('#slideshow img').length;
  setInterval(function() {
      // Fade out the last image
      $("#slide-img-" + slideInt).fadeOut(1500);
      // Fade in the next image
      $("#slide-img-" + nextSlide).fadeIn(1000);
      slideInt++;
      nextSlide++;

      // Reset if end of the images
      if(nextSlide > count) {
        nextSlide = 1;
      }
      if(slideInt > count) {
        slideInt = 1;
      }
  }, 8000);
}

$(function() {
  // Hide all the slideshow images initially
  $('#slideshow img').hide();
  startSlideshow();
});
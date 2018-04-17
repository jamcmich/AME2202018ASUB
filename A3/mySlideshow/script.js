
var slideIndex = 1;
showSlides(slideIndex);

function getInformation() {
  var slides = document.getElementsByClassName("mySlides");

  console.log(document.getElementsByClassName("prev")[0].innerHTML);
  console.log(document.getElementsByClassName("next")[0].innerHTML);
  // slides[slideIndex-1].style.border = "5px solid orange";
}

function updateInformation() {
  var slides = document.getElementsByClassName("mySlides");

  // Detect Next button press
  document.querySelector('.next').addEventListener('click', function next() {
    console.log("Next button clicked.");

    // slides[slideIndex-1].style.border = "5px solid red";

    $(slides[slideIndex-1]).removeClass("w3-animate-left");
    $(slides[slideIndex-1]).addClass("w3-animate-right");
    // slides[slideIndex-1].style.zIndex += 1;
  })

  // Detect Prev button press
  document.querySelector('.prev').addEventListener('click', function prev() {
    console.log("Prev button clicked.");

    // slides[slideIndex-1].style.border = "5px solid blue";

    $(slides[slideIndex-1]).removeClass("w3-animate-right");
    $(slides[slideIndex-1]).addClass("w3-animate-left");
  })
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  updateInformation();
}

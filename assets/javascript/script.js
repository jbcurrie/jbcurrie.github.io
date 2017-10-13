// Get the navbar
var navbar = document.getElementById("navbar");
var body = document.getElementsByTagName("body");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

function myFunction() {
  if (window.pageYOffset >= sticky) {
      
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("responsive");
  }
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("btn-scroll").style.display = "block";
    } else {
        document.getElementById("btn-scroll").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

function hamburger() {
    var x = document.getElementById("navbar");
    if (x.className === "topNav sticky") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}


window.onscroll = function() {scrollFunction()};
document.addEventListener("scroll", myFunction);
document.addEventListener("click",hamburger);
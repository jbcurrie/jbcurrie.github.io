const sticky = navbar.offsetTop;
// sticky navbar
function stickyNav() {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset >= sticky) {
      
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("responsive");
  }
}
// hide scroll top button above nav bar
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("btn-scroll").style.display = "block";
    } else {
        document.getElementById("btn-scroll").style.display = "none";
    }
}

// trigger scroll top
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
// trigger hamburger
function hamburger() {
    const navbar = document.getElementById("navbar");
    const addTimes = document.getElementsByClassName('hamburger')[0]
    
    if (navbar.className === "topNav sticky") {
        navbar.className += " responsive";
        addTimes.innerHTML = '&times;'
    } else {
        navbar.className = "topNav";
      addTimes.innerHTML = '&#9776;'
    }
}
// animate portfolios
function runAnimate (e) {
    var target = e.currentTarget
    var content = target.getElementsByClassName("portfolio-content")[0];
    var header = target.getElementsByClassName("name")[0];
    if (content.className === "portfolio-content") {
        content.classList += " content-transition"
        header.classList += " header-transition"
    } else {
        content.className = "portfolio-content"
        header.className = "name"
    }
}
// animate portfolios
function galleryAnimate (e) {
  const text = document.getElementsByClassName("text");
    for (i = 0; i < text.length; i++) {
        text[i].addEventListener("click",runAnimate,false);
    }
}

window.onscroll = scrollFunction // function() {scrollFunction()};
document.addEventListener("scroll", stickyNav);
document.getElementById("navbar").addEventListener("click",hamburger);
galleryAnimate();

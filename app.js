var menuToggle = document.getElementById("menu-toggle")
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", () => {
     // forEach is not supported in IE11
  // activeElements.forEach(function(e){
  //     e.classList.toggle("active");
  // });
     for(var activated = 0; activated < activeElements.length; activated++){
          activeElements[activated].classList.toggle("active");
     }
})
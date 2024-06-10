
// $('.toggle-menu').click(function () {
//       $('.exo-menu').toggleClass('display');

// });




var dropdowns = document.getElementsByClassName("dropdown-btn");

for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            } else {
            dropdownContent.style.display = "block";
            }
      });
}


var mobileMenu = document.querySelector(".mobile-menu");
var sidenav = document.querySelector(".sidenav");
mobileMenu.addEventListener("click", function() {
      sidenav.classList.toggle("sidenav-active");
});



// side nav after content click to close side nav

var closeBtn = document.querySelector(".closebtn");
closeBtn.addEventListener("click", function() {
      sidenav.classList.toggle("sidenav-active");
});


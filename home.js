window.onscroll = function () { myFunction() };

//Get the navbar
var navbar = cocument.getElementByID("navbar");

//Get the offset poisiton of the navbar
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}
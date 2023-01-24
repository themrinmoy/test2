import Typed from 'typed.js';

window.onscroll = function () { myFunction() };
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Can also be included with a regular script tag

// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 40
// };
// var typed = new Typed('.element', {
//   strings: ["First sentence.", "Second sentence."],
//   typeSpeed: 30
// });

// // var typed = new Typed(".element", { strings: ["options", "options", "options", "options", "options"] });
// const element =doc.getElementById("element")


// var typed = new Typed(".element",
//   {
//     strings:
//       ["hello   1", "chakraborty  2", "h  3", "options  4", "options  5"], loop: true
//   },);


// import Typed from 'typed.js';

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

var typed = new Typed('.element', options);
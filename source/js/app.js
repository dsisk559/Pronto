var body = document.getElementById('body');
var preloader = document.getElementById('preloader');

// body.onload = clearPreloader();

// function clearPreloader() {;
//   preloader.classList.add('invisible');
// }

var menuButton = document.getElementById('nav-button');
var navMenu = document.getElementById('nav');

menuButton.addEventListener('click', showMenu);

function showMenu() {
  navMenu.classList.toggle('show');

}
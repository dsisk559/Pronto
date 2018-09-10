var body = document.getElementById('body');
var preloader = document.getElementById('preloader');

console.log('loaded?')
body.onload = clearPreloader();

function clearPreloader() {
  console.log('loaded');
  preloader.classList.add('invisible');
}
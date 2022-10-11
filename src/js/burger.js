const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
overlay.addEventListener('click', function(e) {
  if (e.target.matches('a')) {
    overlay.classList.remove('overlay');
    burgerMenu.classList.remove('close');
  }
  else{
    overlay.classList.remove('overlay');
    burgerMenu.classList.remove('close');
  }
});
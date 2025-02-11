const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toogle');
const map = document.querySelector('.map__live');

map.classList.remove('map__live--nojs');
navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', () => {
  navMain.classList.toggle('navigation--closed');
  navMain.classList.toggle('navigation--opened');
});

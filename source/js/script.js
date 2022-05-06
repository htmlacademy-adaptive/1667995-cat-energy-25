let navMain = document.querySelector('.menu-list');
let navToggle = document.querySelector('.menu-list__toggle');

navMain.classList.remove('menu-list--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('menu-list--closed')) {
    navMain.classList.remove('menu-list--closed');
    navMain.classList.add('menu-list--opened');
  } else {
    navMain.classList.add('menu-list--closed');
    navMain.classList.remove('menu-list--opened');
  }
});

let navMain = document.querySelector('.header__nav');
let navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');
navToggle.classList.remove('header__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header__nav--closed')) {
    navMain.classList.remove('header__nav--closed');
    navMain.classList.add('header__nav--open');
    navToggle.classList.add('header__toggle--active');
    navToggle.classList.remove('header__toggle--inactive');
  } else {
    navMain.classList.add('header__nav--closed');
    navMain.classList.remove('header__nav--open');
    navToggle.classList.remove('header__toggle--active');
    navToggle.classList.add('header__toggle--inactive');
  }
}
);


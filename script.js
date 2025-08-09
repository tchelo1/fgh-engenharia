const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
  document.body.classList.toggle('menu-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('show');
    document.body.classList.remove('menu-open');
  });
});

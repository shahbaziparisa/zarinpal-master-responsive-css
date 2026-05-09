const hamburgerIcon = document.querySelector('.hamber-menu');
const hamburgerMenu = document.querySelector('.hamber-menu-panel');
const crossIcon = document.querySelector('.close-icon');
const showServiceMenu = document.querySelector('#show-services-menu');

hamburgerIcon.addEventListener('click', function () {
  console.log(hamburgerMenu.style.transform);
  hamburgerMenu.classList.add('show-hamburger-menu');
});

crossIcon.addEventListener('click', function () {
  hamburgerMenu.classList.remove('show-hamburger-menu');
});


showServiceMenu.addEventListener('mouseenter', function (e) {
  
  const div = e.target.querySelector('.services-menu');
  console.log('div',div)
  div.style.animation = 'showUp 0.35s 1';
  div.style.display = 'flex';
});

showServiceMenu.addEventListener('mouseleave', function (e) {
  // const div = e.target.childNodes[5];
    const div = e.target.querySelector('.services-menu');
  div.style.display = 'none';
});

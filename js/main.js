const config = {
  type: 'carousel',
};

new Glide('.glide', config).mount();
//https://glidejs.com/

const hamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const overlayMenu = document.querySelector('.overlay-menu');

hamburger.addEventListener('click', () => {

  if(header.classList.contains('open')) { // Close hamburger menu
    header.classList.remove('open');

    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');

    overlayMenu.classList.remove('fade-in');
    overlayMenu.classList.add('fade-out');
  } else { // Open hamburger menu
    header.classList.add('open');

    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');

    overlayMenu.classList.remove('fade-out');
    overlayMenu.classList.add('fade-in');
  }

})
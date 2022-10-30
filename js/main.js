
// document.querySelectorAll('.activities-spoiler__trigger').forEach((item) =>
//     item.addEventListener('click', () => {
//         const parent = item.parentNode;
//         parent.classList.toggle('active');
//     }))
// new fullpage('#fullpage', {
//     sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],

//   });
// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image);

// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)

AOS.init();

function headerScroll() {
  const header = document.querySelector('.navbar');
  const first = document.querySelector('.hero');
  const headerHeight = header.offsetHeight;
  const firstHeight = first.offsetHeight;
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
  
    if (scrollDistance >= firstHeight + headerHeight) {
    	header.classList.add('header--fixed');
    	first.style.marginTop = `${headerHeight}px`;
    } else {
    	header.classList.remove('header--fixed');
    	first.style.marginTop = null;
    }
  
    // if (scrollDistance > lastScrollTop) {
    //   header.classList.remove('header--fixed');
    //   first.style.marginTop = null;
    // } else {
    //   header.classList.add('header--fixed');
    //   first.style.marginTop = `${headerHeight}px`;
    // }
  
    // if (scrollDistance === 0) {
    //   header.classList.remove('header--fixed');
    //   first.style.marginTop = null;
    // }
  
    lastScrollTop = scrollDistance;
  });
}
headerScroll()

var heroImages = document.querySelectorAll('#parallax');
new simpleParallax(heroImages);
'use strict';

// 홈 title slide 구현

const showing_class = 'showing';
const fitstClass = document.querySelector('.home__slide__title:first-child');

function titleSlideFn() {

  const currentSlide = document.querySelector(`.${showing_class}`);

  if (currentSlide) { //document에 showing cls가 있을때
    currentSlide.classList.remove(showing_class);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(showing_class);
    } else {
      fitstClass.classList.add(showing_class);
    }
  } else {
    fitstClass.classList.add(showing_class);
  }
}

setTimeout(titleSlideFn);
setInterval(titleSlideFn, 4500);


// header

const navBar = document.querySelector("#navbar");
const navbarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navBar.classList.add('navbar--dark');
  } else {
    navBar.classList.remove('navbar--dark');
  }
});




//toggle button

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarContainer = document.querySelector('.navbar__menu_container')
navbarToggleBtn.addEventListener('click', () => {
  navbarContainer.classList.toggle('open');
});


const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  console.log(link);
  if (link == null) {
    return;
  }
  navbarContainer.classList.remove('open');
  scrollIntoView(link);
});



const contactBtn = document.querySelector('.home__contact');

contactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth'
  });
}


//scrolling opacity


const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - (window.scrollY / homeHeight);
});

//go-top

const goTop = document.querySelector('.go__top');
const showingArrow = 'showing__arrow';

function goTopArrow() {
  document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
      goTop.classList.add(showingArrow);
    } else {
      goTop.classList.remove(showingArrow);
    }
  })
}

goTopArrow();


//skils 필터링

const categories = document.querySelector(".skills__categories");
const skillContainer = document.querySelector(".skills__container");
const skillDivede = document.querySelector(".skill__divide");
const skillTitle = document.querySelectorAll(".skill__title");

categories.addEventListener("click", (e) => {
  
  const filter = e.target.dataset.filter;   
  console.log(filter);

  if(filter == null){
    return;
  }
  
  for(let skill of skillTitle){
    if(filter === "*" || filter === skill.dataset.type){
      skill.classList.remove('indivisual');
    }else{
      skill.classList.add('indivisual');
    }
  }
});




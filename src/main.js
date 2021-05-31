'use strict';

// 홈 title slide 구현

const showing_class = 'showing';
const fitstClass = document.querySelector('.home__slide__title:first-child');

function titleSlideFn() {

  const currentSlide = document.querySelector(`.${showing_class}`);

  if (currentSlide) { 
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

//header link
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  scrollIntoView(link);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth'
  });
}


//contact btn 
const contactBtn = document.querySelector('.home__contact');

contactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

contactBtn.addEventListener("keyup", (e) => {
  if(e.keyCode == 9){
    contactBtn.style.color = "#c291ed";
    contactBtn.style.backgroundColor = "#eeeeee";
  }
});



//toggle button

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarContainer = document.querySelector('.navbar__menu_container')
navbarToggleBtn.addEventListener('click', () => {
  navbarContainer.classList.toggle('open');
});




//scrolling opacity

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - (window.scrollY / homeHeight);
});


//skils 필터링

const categories = document.querySelector(".skills__categories");
const skillContainer = document.querySelector(".skills__container");
const skillDivede = document.querySelector(".skill__divide");
const skillTitle = document.querySelectorAll(".skill__title");

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter;   
  if(filter == null){
    return;
  }
  skillsFilter(e)
});

categories.addEventListener("keypress", (e) => {
  const filter = e.target.dataset.filter;  
  if(e.key === "Enter"){
    console.log(filter)
    skillsFilter(e);
  }
});


function skillsFilter(event){
  const filter = event.target.dataset.filter;  
  for(let skill of skillTitle){
    if(filter === "*" || filter === skill.dataset.type){
      skill.classList.remove('indivisual');
    }else{
      skill.classList.add('indivisual');
    }
  }
}


// blog btn animaition

const studyBtn = document.querySelector(".study__blog__btn")
studyBtn.addEventListener("mouseover", () => {
  studyBtn.innerHTML = "Learn More 😀👉"
});

studyBtn.addEventListener("mouseout", () => {
  studyBtn.innerHTML = "Learn More"
});


// blog btn animaition (접근성)

studyBtn.addEventListener("keyup", (e) => {
  if(e.keyCode == 9){
    studyBtn.innerHTML = "Learn More 😀👉";
    studyBtn.style.backgroundColor = "#ffef45";
    studyBtn.style.color = "#4d4d4d";
  }
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



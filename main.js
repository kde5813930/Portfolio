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



//projects

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  if (filter == null) {
    return;
  }

  //버튼 선택 

  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeNmae === 'BUTTON' ? e.target : e.target.parentNode;
  e.target.classList.add('selected');


  projectContainer.classList.add('anim-out');

  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);


  // 1. 모든 섹션 요소들을 메뉴 아이템들을 가지고 온다
  // 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
  // 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

  const sectionIds = [
    '#main__home',
    '#about',
    '#skills',
    '#my__project',
    '#contact',
  ];

  const sections = sectionIds.map(id => document.querySelector(id));
  const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));
  console.log(sections);
  console.log(navItems);

  const observerOption = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  }
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      console.log(entry.target);
    })
  }

  const observer = new IntersectionObserver(observerCallback, observerOption);
  sections.forEach(section => observer.observe(section));

});



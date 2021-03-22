'use strict';
/*
const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".home__slide__title:first-child");

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) { //showing cls가 있을때
    currentSlide.classList.remove(SHOWING_CLASS); // showing cls를 없애주고
    const nextSlide = currentSlide.nextElementSibling; //넥스트 슬라이드를 showing cls 다음으로 변수지정
    if (nextSlide) { // 만약 다음클래스가 있으면
      nextSlide.classList.add(SHOWING_CLASS); // 다음 슬라이드에 shwing cls를 추가해줘
    } else {
      firstSlide.classList.add(SHOWING_CLASS); // 그렇지 않으면 첫번째 슬라이드에 추가해줘
    }
  } // 근데 이 모든 전개는 현재 클래스가 쇼잉클래스가 있을때
  else { //모두 쇼잉클래스가 없으면 첫번째 슬라이드에 showing cls를 추가해줘
    firstSlide.classList.add(SHOWING_CLASS);
    // 바로 켰을때는 showing cls가 없으니까 showing cls를 첫번째에 넣어주고,  그 이후로 showing cls가 있을때는
    // 위 if문을 실행한다
  }
}

slide();
setInterval(slide, 4500);
*/


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


/*
//navbar on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(`navbarHeight:${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});
*/
const navBar = document.querySelector("#navbar");
const navbarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navBar.classList.add('navbar--dark');
  } else {
    navBar.classList.remove('navbar--dark');
  }
});




/*
//Handle scrolling 

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth",

  });
});
*/
/*
const navbar__menu = document.querySelector('.navbar__menu');
navbar__menu.addEventListener('click', (event) => {
  const target = event.target; // 이벤트가 일어날 객체, event.targer은 최하위요소를 기준으로 타겟을 불러온다.
  const link = target.dataset.link; // 클릭을 했을때 각 id가 타겟이 된다.
  console.log(link);
  if (link == null) { //그치만, 클릭했을때 .navbar__menu를 클릭하면 data값이 없으므로, undifind나 null값이 나온다.
    return; //그러므로, if문을 이용해서, 만약 link가 null값이 나오면 아무것도 하지마라는 뜻으로 사용하고, 그렇지 않으면 아래 내용대로 진행해라 -> 해당내용으로 설명할 수 있다.
  }
  const scrollTo = document.querySelector(link) // scrollIntoView는 id를 받아와서 스크롤을 할수있다.
  scrollTo.scrollIntoView({ // 따라서, link에있는 dataset에 연결된 각각의 id값(link)을
    behavior: "smooth" // 받아와서 scrollIntoView의 기능을 사용한것
  });
});
*/

const navbar__menu = document.querySelector('.navbar__menu');
navbar__menu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  console.log(link);
  if (link == null) {
    return;
  }
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

/*
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(1 - window.scrollY / homeHeight);
  //scroll높이와 homeHeight 의 높이가 같으면 1이되고, 1-1은 0이 된다.
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
*/

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




});
'use strict';

// 스크롤에 따른 메뉴바 색상 처리
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height; 
console.log(navbarHeight);
document.addEventListener("scroll", () => {
    // console.log("이벤트가 발생되었음!");
    // console.log(window.scrollY);
    if(window.scrollY > navbarHeight){
        navbar.classList.add("navbar--bold"); // if문이 true일때 클래스 생성됨
    }else{
        navbar.classList.remove("navbar--bold"); // if문이 false일때 클래스 삭제됨
    }
});

// 스크롤에 따른 메뉴바 고정 처리 + 메뉴 클릭시 자동 스크롤되어 화면 전환 처리
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
    // console.log(e);
    const target = e.target;
    const link = target.dataset.link;

    if(link == null){
        return;
    }
    // console.log(link);
    scrollIntoView(link);

});

// constact 버튼
const homeContactButton = document.querySelector(".home__contact");
homeContactButton.addEventListener("click", () => {
    scrollIntoView("#contact");
});

// arrow-up 버튼
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add("visible");
    }else{
        arrowUp.classList.remove("visible");
    }
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

arrowUp.addEventListener("click", () => {
    scrollIntoView("#home");
});


// 
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}












const hamburgerMenu = document.querySelector(".hamburger_menu");
const hamburgerIcon = document.querySelector(".hamburger");
const hamburgerIconIn = document.querySelector(".hamburger.in");
const arrow = document.querySelector(".aside_arrow");

const subs = document.querySelectorAll(".title");
const depth2 = document.querySelectorAll(".depth02");
const arrows = document.querySelectorAll(".m_arrow");
const dark = document.querySelector(".cover");

// 스크롤 시 헤더 스타일 변경
window.addEventListener("scroll", () => {
  header.classList.add("on");
  header.style.borderBottom = "1px solid #ddd";

  if (window.scrollY == 0) {
    header.classList.remove("on");
    header.style.border = "none";
  }
});

// hamburger 메뉴
hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.add("on");
  dark.style.display = "block";

  if (hamburgerIcon.classList.contains("on")) {
    hamburgerMenu.style.visibility = "visible";
    hamburgerMenu.style.opacity = "1";
    gnb.style.visibility = "hidden";
  }
});
hamburgerIconIn.addEventListener("click", () => {
  hamburgerMenu.style.visibility = "hidden";
  hamburgerMenu.style.opacity = "0";
  gnb.style.visibility = "visible";

  hamburgerIcon.classList.remove("on");
  dark.style.display = "none";
});

// sub메뉴
subs.forEach((item, index) => {
  item.addEventListener("click", () => {
    arrows[index].classList.toggle("on");

    if (arrows[index].classList.contains("on")) {
      depth2[index].style.height="auto";
    } else {
      depth2[index].style.height="0";
    }
  });
});

// 우측 하단 화살표 클릭 시 상단으로 스크롤
arrow.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
});
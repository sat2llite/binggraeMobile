// 스크롤 시 헤더 스타일 변경
window.addEventListener("scroll", () => {
  header.classList.add("on");
  header.style.borderBottom = "1px solid #ddd"; 

  if (window.scrollY == 0) {
    header.classList.remove("on");
    header.style.border = "none"; 
  }
});
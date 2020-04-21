// 타이핑 효과
// https://www.w3schools.com/howto/howto_js_typewriter.asp
let i = 0;
const txt = '김개발을_소개합니다!'; /* The text */
const speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  const writer = document.getElementById("type-writer-txt")
  if (i < txt.length) {
    if (!writer.innerHTML) {
      writer.innerHTML = txt.charAt(i)
    } else {
      writer.innerHTML += txt.charAt(i);
    }
    setTimeout(typeWriter, speed);
    i++;
  } else {
    writer.classList.add('finished')
  }
}

// 스크롤 효과
function navScroll(query) {
  const element = document.querySelector(query);
  console.log("hi")
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - 90
  });
}

// 페이지 로드 시 
window.onload = function () {
  // 타이핑 시작
  typeWriter();
}
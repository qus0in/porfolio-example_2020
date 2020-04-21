// 타이핑 효과
// 참고 : https://www.w3schools.com/howto/howto_js_typewriter.asp

var i = 0;
var txt = '김개발을_소개합니다'; /* The text */
var speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    /* id 입력 하기 */
    document.getElementById("welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// 스크롤 효과
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll
function navScroll(query) {
    const element = document.querySelector(query);
    console.log("hi")
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop - 90
    });
  }
// 로딩 시 타이핑 효과 실행
window.onload = typeWriter
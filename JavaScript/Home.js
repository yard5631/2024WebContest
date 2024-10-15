//hamburgermenu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    toggleClasses();
});


function toggleClasses() {
  hamburger.classList.toggle('open');
    menu.classList.toggle('open');
}


//loading window
document.addEventListener("DOMContentLoaded", function (event) {
  // js-textというクラスを取得し、elementsという変数を宣言
  let elements = document.getElementsByClassName("loadingtext");
  // animateTextという関数を、elementsの文字数の回数繰り返す
  for (var i = 0; i < elements.length; i++) {
      animateText(elements[i]);
  }
});

function animateText(element) {
  // elementの文字情報のみをtextという変数に代入
  let text = element.innerText;
  element.innerText = "";

  // textの一文字ずつをspanタグで囲う
  for (var i = 0; i < text.length; i++) {
      var span = document.createElement("span");
      span.innerText = text[i];
      element.appendChild(span);
  }

  // spanで囲った文字をspansに代入
  let spans = element.getElementsByTagName("span");
  // spansのstyleをopacity=1にする処理を、文字数分繰り返す
  for (var j = 0; j < spans.length; j++) {
      (function (index) {
          setTimeout(function () {
              spans[index].style.opacity = 1;
        }, index * 30); // 遅延時間を調整
      })(j);
  }
}
function FadeoutWindow(){
  $('.loader').fadeOut(800);
}
window.onload=function(){
  setTimeout(function(){FadeoutWindow();},3000)
}

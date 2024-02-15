console.log(window.scrollY);

setInterval(() => {
    var elem = document.querySelector("#blackWindow");
    if (200 <= window.scrollY) {
        elem.classList.remove("animate-fadeOut");
        elem.classList.add("animate-fadeIn");

    }
    else if (elem.classList.contains("animate-fadeIn")) {
        elem.classList.remove("animate-fadeIn");
        elem.classList.add("animate-fadeOut");
    }

}, 0.1);

var prevScrollY = window.scrollY;
setInterval(() => {
    console.log(prevScrollY);
    var elems = document.querySelectorAll("#CheezePf [id^='sec']");
    var elem = elems[0];
    if (200 <= window.scrollY && window.scrollY <= 400) {
        if (prevScrollY < 200) {
            elem.classList.add("animate-showFadeUp");
            elem.classList.remove("animate-hideFadeUp");
            elem.classList.remove("animate-showFadeDown");
            elem.classList.remove("animate-hideFadeDown");
        }
        else if (400 < prevScrollY) {
            elem.classList.remove("animate-showFadeUp");
            elem.classList.remove("animate-hideFadeUp");
            elem.classList.add("animate-showFadeDown");
            elem.classList.remove("animate-hideFadeDown");
        }
    }
    else if (elem.classList.contains("animate-showFadeUp") || elem.classList.contains("animate-showFadeDown")) {   // 해당 영역에 접근한 뒤, 그 외 스크롤 영역으로 이동했을 경우,
        if(window.scrollY < 200) {
            elem.classList.remove("animate-showFadeUp");
            elem.classList.remove("animate-hideFadeUp");
            elem.classList.remove("animate-showFadeDown");
            elem.classList.add("animate-hideFadeDown");
        }
        else if(400 < window.scrollY){
            elem.classList.remove("animate-showFadeUp");
            elem.classList.add("animate-hideFadeUp");
            elem.classList.remove("animate-showFadeDown");
            elem.classList.remove("animate-hideFadeDown");
        }
    }

    var elem = document.querySelector("#CheezePf #sec2");
    if (500 <= window.scrollY && window.scrollY < 700) {
        elem.classList.remove("animate-hideFade");
        elem.classList.add("animate-showFade");
    }
    else if (elem.classList.contains("animate-showFade")) {   // 해당 영역에 접근한 뒤, 그 외 스크롤 영역으로 이동했을 경우,
        elem.classList.remove("animate-showFade");
        elem.classList.add("animate-hideFade");
    }

    prevScrollY = window.scrollY;

}, 0.1);

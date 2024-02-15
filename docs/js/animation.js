console.log(window.scrollY);

setInterval(() => {
    var elem = document.querySelector("#CheezePf #blackWindow");
    if (100 <= window.scrollY) {
        elem.classList.remove("animate-fadeOut");
        elem.classList.add("animate-fadeIn");

    }
    else if (elem.classList.contains("animate-fadeIn")) {
        elem.classList.remove("animate-fadeIn");
        elem.classList.add("animate-fadeOut");
    }

}, 0.1);

setInterval(() => {
    var elem = document.querySelector("#RcmdSong #blackWindow");
    if (6200 <= window.scrollY) {
        elem.classList.remove("animate-fadeOut");
        elem.classList.add("animate-fadeIn");

    }
    else if (elem.classList.contains("animate-fadeIn")) {
        elem.classList.remove("animate-fadeIn");
        elem.classList.add("animate-fadeOut");
    }

}, 0.1);







setInterval(() => {
    var elems = document.querySelectorAll("#CheezePf [id^='sec']");
    for(var i = 0;i<elems.length;i++){
        var elem = elems[i];
        if ( (i*1000+100) <= window.scrollY && window.scrollY <= (i*1000+800) ) {
            elem.classList.add("animate-showFadeUp");
            elem.classList.remove("animate-hideFadeUp");
        }
        else if (elem.classList.contains("animate-showFadeUp")) {   // 해당 영역에 접근한 뒤, 그 외 스크롤 영역으로 이동했을 경우,
            elem.classList.remove("animate-showFadeUp");
            elem.classList.add("animate-hideFadeUp");
        }
    }

}, 0.1);

setInterval(() => {
    var elems = document.querySelectorAll("#RcmdSong [id^='sec']");
    for(var i = 0;i<elems.length;i++){
        var elem = elems[i];
        if ( (i*1000+6200) <= window.scrollY && window.scrollY <= (i*1000+6900) ) {
            elem.classList.add("animate-showFadeUp");
            elem.classList.remove("animate-hideFadeUp");
        }
        else if (elem.classList.contains("animate-showFadeUp")) {   // 해당 영역에 접근한 뒤, 그 외 스크롤 영역으로 이동했을 경우,
            elem.classList.remove("animate-showFadeUp");
            elem.classList.add("animate-hideFadeUp");
        }
    }

}, 0.1);


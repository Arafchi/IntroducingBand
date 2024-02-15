console.log(window.scrollY);

setInterval(() => {
    var elem = document.querySelector("#blackWindow");
    if( 200 <= window.scrollY ) {
        elem.classList.remove("animate-fadeOut");
        elem.classList.add("animate-fadeIn");
        
    }
    else if( elem.classList.contains("animate-fadeIn")) {
        elem.classList.remove("animate-fadeIn");
        elem.classList.add("animate-fadeOut");
    }

}, 0.1);


setInterval(() => {
    var elem = document.querySelector("#sec1-1");
    if( 200 <= window.scrollY ) {
        elem.classList.add("animate-fadeUp");
    }
    var elem = document.querySelector("#sec1-2");
    if( 200 <= window.scrollY ) {
        elem.classList.add("animate-fadeUp");
    }


}, 0.1);

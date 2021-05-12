// START определяем на каких устройствах открыта страница (тачскрин или мышка)
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return(
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
}
// END определяем на каких устройствах открыта страница


if (isMobile.any()) {
    document.body.classList.add('_touch'); //Если это моб устройство, то добавляем класс _touch
}else{
    document.body.classList.add('_pc'); //Если это PC, то добавляем класс _pc
}
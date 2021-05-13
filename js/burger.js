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

    let menuArrows = document.querySelectorAll('.menu__arrow'); // собираем все .menu__arrow в переменную
    if (menuArrows.length > 0){ // условие проверки переменной
        for (let index = 0; index < menuArrows.length; index++) {   // если имеется, то запускаем цикл
            const menuArrow = menuArrows[index];    // создание константы с каждой стрелкой
            menuArrow.addEventListener("click", function (e) {  // вешаем событие клика
                menuArrow.parentElement.classList.toggle('_active'); // добавление класса
            });
        }
    }

}else{
    document.body.classList.add('_pc'); //Если это PC, то добавляем класс _pc
}


//START Бургер
const iconMenu = document.querySelector('.menu__icon') //получаем иконку
const menuBody = document.querySelector('.menu__body') //получаем контент

if (iconMenu){ //Условие, если имеется такой класс
    iconMenu.addEventListener("click", function (e) { //добавляем событие клика на иконку
        iconMenu.classList.toggle('_active');   //добавляем класс иконке, чтобы можно было с ней взаимодействовать
        menuBody.classList.toggle('_active');   //добавляем класс контенту
        document.body.classList.toggle('_lock'); //Добавление класса body, чтобы при появлении контента нельзя было прокручивать основной контент
    });
}
//END Бургер


//START Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]'); //собираем в массив все элементы .menu__link с атрибутом [data-goto]

if (menuLinks.length > 0) {     // Условие, если имеется
    menuLinks.forEach(menuLink => {   //Запускаем цикл
       menuLink.addEventListener("click", onMenuLinkClick); // Вешаем событие клика на функцию onMenuLinkClick
    });
    function onMenuLinkClick(e) {   //создаем функцию
        const menuLink = e.target; //получаем объект на который мы кликаем
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){ //Проверем. menuLink.dataset.goto (Заполнен ли дата атрибут)
                                                                                     //document.querySelector(menuLink.dataset.goto) (Существует ли объект на который ссылается)
            const gotoBlock = document.querySelector(menuLink.dataset.goto);  // Получаем сам объект
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;// Вычитываем положение объекта с учетом высоты шапки
            // const gotoBlockValue - создаем константу в которой будет точное распложение секции
            // gotoBlock.getBoundingClientRect().top - получаем местоположение в пикселях
            // + pageYOffset - прибавляем кол-во прокрученных пикселей
            // - document.querySelector('header').offsetHeight - отнимаем высоту шапки

            if(iconMenu.classList.contains('_active')){ //если иконка меню содержит класс _active
                iconMenu.classList.remove('_active');   // Убираем класс иконке
                menuBody.classList.remove('_active');   // Убираем класс контенту
                document.body.classList.remove('_lock'); // Убираем класса body
            }


            window.scrollTo({ //прокручиваем скролл к нужному месту
               top: gotoBlockValue,
               behavior: "smooth"
            });
            e.preventDefault();
            //window.scrollTo - обращаемся к окну браузера и добавляем функцию которая будет прокручивать
            //top: gotoBlockValue, - нужно прокрутится сверху и вычитанное положение секции
            //behavior: "smooth" - плавная прокрутка
            //e.preventDefault(); - отключаем ссылку (чтобы не переходила, а служила для прокрутки)

        }
    }
}

//END Прокрутка при клике

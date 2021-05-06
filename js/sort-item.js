let a = [50, 4, 12, 1, 3, 7, 6];

// Сортировка пузырьком

for (let i = 0; i < a.length; i++){
    for (let j = i; j < a.length; j++){
         if (a[i] > a[j]) {          //    > Сортировка по возрастанию
            let temp = a[i];
            a[i] = a [j];
            a[j] = temp;
        }
        console.log(a);
    }
}

// let nav = document.querySelector('#nav'); //Получаем родительский блок
// replaceNode = nav.replaceChild(nav.children[1], nav.children[0]); //затираем строку, записываем в переменную replaceNode
// nav.appendChild(replaceNode); // вставляем в конец документа, replaceNode

// // ---------------START Скрипт для одного атрибута фильтрации-------------------
//
// // Вешаем событие на кнопку #sort-asc
// document.querySelector('#sort-asc').onclick = mySort; //по клику на #sort-asc будет выполнятся функция mySort
// // / Вешаем событие на кнопку #sort-desc
// document.querySelector('#sort-desc').onclick = mySortDesc; //по клику на #sort-desc будет выполнятся функция mySortDesc
//
// // Функция mySort
// function mySort() {
//     let nav = document.querySelector('.item-wrapper'); //Получаем родительский блок
//
//     //Перебираем циклом
//     for (let i = 0; i < nav.children.length; i++){
//         for (let j = i; j < nav.children.length; j++){
//             //Сравниваем элементы (как число), по атрибуту
//             if (+nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')){
//                 replaceNode = nav.replaceChild(nav.children[j], nav.children[i]); //затираем строку, записываем в переменную replaceNode
//                 insertAfter(replaceNode, nav.children[i]) //replaceNode-элемент который затерли, вставляем в nav.children[i]
//             }
//         }
//     }
// }
//
// // Функция mySortDesc
// function mySortDesc() {
//     let nav = document.querySelector('.item-wrapper'); //Получаем родительский блок
//
//     //Перебираем циклом
//     for (let i = 0; i < nav.children.length; i++){
//         for (let j = i; j < nav.children.length; j++){
//             //Сравниваем элементы (как число), по атрибуту
//             if (+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')){
//                 replaceNode = nav.replaceChild(nav.children[j], nav.children[i]); //затираем строку, записываем в переменную replaceNode
//                 insertAfter(replaceNode, nav.children[i]) //replaceNode-элемент который затерли, вставляем в nav.children[i]
//             }
//         }
//     }
// }
//
// //функция определяет родителя и вставляет перед ним нужное значение
// function insertAfter(elem, refElem) {
//     return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
// }
//
// // ---------------END Скрипт для одного атрибута фильтрации-------------------

// ---------------STARTСкрипт для нескольких атрибутов фильтрации-------------------

// Вешаем событие на кнопку #sort-asc
document.querySelector('#sort-asc').onclick = function () { //по клику на #sort-asc будет выполнятся функция mySort c передачей параметров
    mySort('data-price');
}
// / Вешаем событие на кнопку #sort-desc
document.querySelector('#sort-desc').onclick = function () { //по клику на #sort-asc будет выполнятся функция mySort c передачей параметров
    mySortDesc('data-price');
}
// / Вешаем событие на кнопку #sort-rating
document.querySelector('#sort-rating').onclick = function () { //по клику на #sort-rating будет выполнятся функция mySort c передачей параметров
    mySort('data-rating');
}

// Функция mySort
function mySort(sortType) {
    let nav = document.querySelector('.item-wrapper'); //Получаем родительский блок

    //Перебираем циклом
    for (let i = 0; i < nav.children.length; i++){
        for (let j = i; j < nav.children.length; j++){
            //Сравниваем элементы (как число), по атрибуту
            if (+nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType)){
                replaceNode = nav.replaceChild(nav.children[j], nav.children[i]); //затираем строку, записываем в переменную replaceNode
                insertAfter(replaceNode, nav.children[i]) //replaceNode-элемент который затерли, вставляем в nav.children[i]
            }
        }
    }
}

// Функция mySortDesc
function mySortDesc(sortType) {
    let nav = document.querySelector('.item-wrapper'); //Получаем родительский блок

    //Перебираем циклом
    for (let i = 0; i < nav.children.length; i++){
        for (let j = i; j < nav.children.length; j++){
            //Сравниваем элементы (как число), по атрибуту
            if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)){
                replaceNode = nav.replaceChild(nav.children[j], nav.children[i]); //затираем строку, записываем в переменную replaceNode
                insertAfter(replaceNode, nav.children[i]) //replaceNode-элемент который затерли, вставляем в nav.children[i]
            }
        }
    }
}

//функция определяет родителя и вставляет перед ним нужное значение
function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

// ---------------STARTСкрипт для нескольких атрибутов фильтрации-------------------
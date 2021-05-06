const htmlElement = document.documentElement; // получение всего содержимого документа
const headElement = document.head; // получение head

const bodyElement = document.body; // получение body
const firstChildNode = bodyElement.firstChild; // получение первого дочернего узла
const lastChildNode = bodyElement.lastChild; // получение последнего дочернего узла
const childNodes = bodyElement.childNodes; // получение коллекции всех детей включая текстовые узлы

// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);
// console.log(firstChildNode);
// console.log(lastChildNode);
// console.log(childNodes);
// console.log(bodyElement.hasChildNodes()); //проверка на существование дочерних узлов


// ---------------------------------------------------------
//Перебор коллекции
// for (let node of childNodes) {
//     console.log(node); // покажет все узлы из коллекции
// }
// let node - объявляем переменную
// childNodes - перебираем ранне созданную константу
// ---------------------------------------------------------

// const previousSiblingNode = bodyElement.previousSibling; //выбор предыдущего уровня вложенности
// console.log(previousSiblingNode);

// const nextSiblingNode = bodyElement.nextSibling; //выбор следующего уровня вложенности
// console.log(nextSiblingNode);

// const parentNode = bodyElement.parentNode; //выбор родителя объекта
// console.log(parentNode);

// const bodyChildren = bodyElement.children; // выбор коллекции с узлами элементов
// console.log(bodyChildren);

// const firstChild = bodyElement.firstElementChild; // первый дочерний элемент
// const lastChild = bodyElement.lastElementChild; // последний дочерний элемент
// console.log(firstChild);
// console.log(lastChild);

// ---------------Произвольная навигация--------------------
// // Поиск по селектору класса
// const elemsOne = document.querySelectorAll('.lesson__list');
// console.log(elemsOne); // получаем кол-ию со всеми найдеными объектами
// // Поиск по селектору тега
// const elemsTwo = document.querySelectorAll('li');
// console.log(elemsTwo);
// // Поиск по смешанному селектору тега и класса
// const elemsThree = document.querySelectorAll('li.lesson__item-list');
// console.log(elemsThree);
// // Поиск по тегу первого уровня вложенности
// const elemsFour = document.querySelectorAll('.lesson__list>li');
// console.log(elemsFour);
// Поиск по нескольким классам
// const elemsFive = document.querySelectorAll('.lesson__list', '.lesson__text');
// console.log(elemsFive);
// Поиск по вложенным классам
// const elemsSix = document.querySelectorAll('.lesson__list .lesson__text');
// console.log(elemsSix);
// Поиск по ID
// const elemsSeven = document.querySelectorAll('#listItem');
// console.log(elemsSeven);
// // Поиск по атрибуту
// const elemsEight = document.querySelectorAll('[data-item]');
// console.log(elemsEight);
// // Поиск по атрибуту со значением
// const elemsNine = document.querySelectorAll('[data-item="85"]');
// console.log(elemsNine);
// // Получение конкретного элемента коллекции
const elems = document.querySelectorAll('li');
console.log(elems[1]);
for (const item of elems){
    console.log(item);
}
//перебираем коллекцию циклом
//

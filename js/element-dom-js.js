const one = document.querySelector('.one'); //получение элемента
one.style.fontSize = '40px'; // добавление стиля
one.style.fontWeight = '900';

one.classList.add('two'); //добавление класса
one.classList.add('two', 'three'); //добавление нескольких классов
one.classList.remove('three'); //Удаление класса

const toggle = document.querySelector('.toggle');
toggle.onclick = function () {       //при клике создаем функцию
// this.classList.toggle('three');     //добавляем класс
    one.classList.toggle('three');    //добавляем класс
}

console.log(one.getAttribute('data')); //чтение атрибута
console.log(document.querySelector('link').getAttribute('href')); //чтение атрибута
console.log(document.querySelectorAll('link')[1].getAttribute('href')); //чтение атрибута с необходимой нумерацией

one.setAttribute('data-num', 6) //добавление атрибута




let gasTitle = document.querySelector('.gas-title');
gasTitle.style.fontSize = '25px';
gasTitle.style.color = '#000';
gasTitle.style.marginBottom = '20px';

let gallons = document.querySelector('.gallons');
gallons.style.marginBottom = '20px';

let gas = document.querySelectorAll('.gas') //получаем все элементы с классом gas
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value; //получаем значение у элемента gallons
        let amount = this.getAttribute('data'); // получаем стоимость кнопки на которую нажали
        console.log(gallons * amount); //выводим произведение
    }
}



let a = document.createElement('div') // создаем элемент div
a.innerHTML = 'Hello!'; //добавление текста в div
a.classList.add('one'); //добавление класса div
console.log(a);

document.querySelector('.test').appendChild(a); //добавление элемента в HTML

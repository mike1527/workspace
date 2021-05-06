document.querySelector('button').onclick = function() {
    console.log(document.querySelector('#password').value);
}

document.querySelector('#colorBtn').onclick = function() {
    console.log(document.querySelector('#color').value);
    //style
    document.querySelector('#colorBtn').style.backgroundColor = document.querySelector('#color').value
}

document.querySelector('#dateBtn').onclick = function() {
    console.log(document.querySelector('#date').value);
}

document.querySelector('#range').oninput = function() {
    console.log(document.querySelector('#range').value);
    document.querySelector('span').innerHTML = document.querySelector('#range').value
}

// document.querySelector('button') - получаем кнопку
// .onclick = function() - вешаем событие, вызываем анонимную функцию
// console.log - выводим в консоль
// document.querySelector('#one') - получение значения элемента по ID (весь элемент)
// value (только значение value)
// .style.backgroundColor - добавляем стили из полученого значения document.querySelector('#color').value
// oninput - событие oninput срабатывает когда изменяется состояние элемента
// document.querySelector('span') - получаем элемент
// .innerHTML - выводим на страницу
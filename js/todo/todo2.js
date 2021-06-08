//selecting dom elements for manipulation
let input = document.querySelector("input[type = 'text']"); //нашли инпут
let ul = document.querySelector("ul"); //нашли список
let container = document.querySelector("div"); //нашли блок со списком
let lists = document.querySelectorAll(".todos li"); //нашли все пункты списка
let spans = document.getElementsByTagName("span"); //нашли спан
let pencil = document.querySelector("#pencil"); //ярлык с карандашом по id убирает инпут
let saveBtn = document.querySelector(".save"); //кнопка сохранить
let clearBtn = document.querySelector(".clear"); //кнопка очистить


let checkAll = document.querySelector(".chk"); //чекбокс всех элементов списка

let deleteAll = document.querySelector(".btnDel"); //удаляем всё по этой кнопке



//удаляет по нажатию на иконку(в спане)
function deleteTodo() {
    for (let span of spans) {
        span.addEventListener("click", function () {
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}


//загружает сохранку если найдет в локалсторадж
function loadTodo() {
    if (localStorage.getItem('todoList')) {
        ul.innerHTML = localStorage.getItem('todoList');
        deleteTodo();
    }
}




//добавление ли + спан + иконка + введенное значение по нажатию enter(13)
input.addEventListener("keypress", function (keyPressed) {
    if (keyPressed.which === 13) {

        let li = document.createElement("li");
        let spanElement = document.createElement("span");
        let icon = document.createElement("i");

        let newTodo = this.value;
        this.value = " ";

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);

        deleteTodo();

    }

});

// помечаем зачеркиванием через класс checked
ul.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


// выделаяет, вешая класс checked на весь список li
checkAll.addEventListener('click', function (event) {
    ul.forEach(list => {
        if (list.className !== 'checked') {
            list.target.classList.add('checked');

        } else {
            list.target.classList.toggle('checked');
        }
    })

}, false);


console.log(ul);
console.log(ul.length);



 //удаляет выделенное, поиск по классу checked

deleteAll.addEventListener("click", function () {
    for (let lists of ul) {
        if (lists.className === 'checked') {
            lists.remove();
        } else continue;
    }

});




//по нажатию на карандаш прячем инпут
pencil.addEventListener('click', function () {
    input.classList.toggle('display');
});



//сохраняем в локалсторадж список
saveBtn.addEventListener('click', function () {
    localStorage.setItem('todoList', ul.innerHTML);

});

//очистка всего
clearBtn.addEventListener('click', function () {
    ul.innerHTML = "";
    localStorage.removeItem('todoList', ul.innerHTML);
});

//delete todo
deleteTodo();

//load Todo
loadTodo();


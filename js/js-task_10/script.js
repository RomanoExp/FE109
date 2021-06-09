//create(‘tagName’) для создания и возврата новых элементов по имени тега;

// attr(‘element’, ‘name’, [‘value’]) для добавления атрибута к элементу или возврата
//значения атрибута;

// html(‘element’, [‘value’]) для добавления любого содержимого внутрь элемента или его
//возврата;

// search(‘element’, ‘selector’) для поиска и возврата найденных элементов внутри
//переданного или в document по селектору CSS.

//addClass(‘element’, ‘className’) для добавления класса к элементу;

// removeClass(‘element’, ‘className’) для удаления класса из элемента;

// toggleClass(‘element’, ‘className’) для переключения класса в элементе;


// hasClass(‘element’, ‘className’) для проверки существования класса в элементе
//(должен вернуть true или false);

// append(‘element’, ‘newElement’, [‘beforeElement’]) для добавления новых элементов
//внутрь какого-либо после всего его содержимого, либо перед каким-то конкретным;

// on(‘element’, ‘eventName’, ‘funcName’) для добавления к элементу события и
//выполнения функции (проверьте доступность контекста this и event).

let body = document.body;

let DomMethods = function () {

    this.create = function (tagName, options) {

        let element = document.createElement(tagName, options);
        let script = document.querySelector('script');
        script.before(element);

    };

    this.attr = function (element, name, value) {
        element = document.querySelector(element);
        if (name == undefined || value == undefined) {
            let getAttrV = element.getAttributeNames();
            let getAttr = element.attributes;
            console.log(getAttrV);
            console.log(getAttr);
            return;
        } else {

            let attr = element.setAttribute(name, value);
        }

    };

    this.html = function (element, value) {
        element = document.querySelector(element);
        element.innerHTML = value;

    };

    this.search = function (selectors) {
        selectors = document.querySelector(selectors);
        console.log(selectors);

    };

    this.removeClass = function (element, value) {
        element = document.querySelector(element);
        element.classList.remove(value);

    };

    this.toggleClass = function (element, value) {
        element = document.querySelector(element);
        element.classList.toggle(value);

    };

    this.addClass = function (element, value) {
        element = document.querySelector(element);
        element.classList.add(value);
    };

    this.hasClass = function (element, value) {
        element = document.querySelector(element);
        console.log(element.classList.contains(value));
    };

    this.append = function (element, text) {
        element = document.querySelector(element);
        element.append(text);

    };
        this.on = function () {


        };
};




let method = new DomMethods();

method.create('h1');
method.create('div');
method.create('img');
method.create('span');
method.create('p');


method.attr('h1', 'src', 'abba');
method.attr('img', 'asd', 'ssdfsddf');
method.attr('img');


method.html('div', '<h2>Helloololo!</h2>');
method.html('h1', 'Hello!');


method.search('span');
method.search('img');


method.addClass('div', 'first');
method.addClass('div', 'abra');
method.addClass('div', 'second');


method.removeClass('div', 'abra');

method.toggleClass('div', 'abra');
method.toggleClass('div', 'abra');
method.toggleClass('div', 'abra');


method.hasClass('div', 'second');
method.hasClass('div', 'true');


let test = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet justo sed magna gravida sodales. Cras fringilla sem urna, ac accumsan nunc blandit eu. Integer convallis euismod orci ac.`;


method.append('p', test);




console.log(method);

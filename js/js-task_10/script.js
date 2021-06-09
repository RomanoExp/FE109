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


let DomMethods = function () {

    this.create = function () {
        var element = document.createElement(tagName, [options]);

    };

    this.attr = function () {
        var attr = element.attributes;

    };

    this.html = function () {
        var content = element.innerHTML;

    };

    this.search = function () {
        var search = document.querySelector(selectors);

    };

    this.removeClass = function () {
        var removeClasses = elem.classList.remove("example", "for", "understand", "he");

    };

    this.toggleClass = function () {
        var toggleClasses = elem.classList.toggle("you");

    };

    this.addClass = function () {

        var addClass = elem.classList.add("ok", "understand");
    };

    this.hasClass = function () {

        var hasClass = elem.classList.contains("example");
    };

    this.append = function () {
родитель.append(элемент или строка)
        parent.append(p);

    };

    this.on = function () {


    };

};




let method = new DomMethods();
console.log(method);

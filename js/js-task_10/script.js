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

// addClass(‘element’, ‘className’) для добавления класса к элементу;

// hasClass(‘element’, ‘className’) для проверки существования класса в элементе
//(должен вернуть true или false);

// append(‘element’, ‘newElement’, [‘beforeElement’]) для добавления новых элементов
//внутрь какого-либо после всего его содержимого, либо перед каким-то конкретным;

// on(‘element’, ‘eventName’, ‘funcName’) для добавления к элементу события и
//выполнения функции (проверьте доступность контекста this и event).
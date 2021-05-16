//1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
//поиска и замены.
//

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'));



console.log('------------2------------');

//2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
//дату в формат 31/12/2025.
//

let date = '2025-12-31',
    arr = date.split('-');
console.log(date);


//console.log(date.replace(/-/g, '/'))
//console.log(date.split('-'), arr.reverse(), arr.join('/'));

console.log(arr);
console.log(arr.reverse());
console.log(arr.join('/'));





console.log('------------3------------');

//3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
//«javascript» тремя разными способами (через substr, substring, slice).
//

let str3 = 'Я учу javascript!';

console.log(str3);
console.log(str3.substr(2, 3)); //substr(откуда отрезать, сколько )
console.log(str3.substring(2, 5)); //substring(откуда отрезать, до)
console.log(str3.slice(2, 5)); //slice(откуда отрезать, до)



console.log('------------4------------');

//4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
//из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
//

let sum = 0,
    arr4 = [4, 2, 5, 19, 13, 0, 10];

for (let num of arr4) {
    sum = sum + (num * num * num)
}
console.log(Math.sqrt(sum));


console.log('------------5------------');
//5. Даны переменные a и b. Отнимите от a переменную b и результат
//присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
//c записалось положительное значение. Проверьте работу скрипта при a и b,
//равных соответственно 3 и 5, 6 и 1.
//

let a = 3,
    b = 5,
    c = a - b;

console.log(Math.abs(c));


console.log('------------6------------');

//6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
//Для решения этой задачи напишите функцию, которая будет добавлять 0
//перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
//сделает 01.09.2014).
//

let date6 = new Date();

function getZero(num) {
    if (num > 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

console.log(date6.getHours() + ':' + date6.getMinutes() + ':' + date6.getSeconds() + ' ' + getZero(date6.getDate()) + '.' + getZero(date6.getMonth()) + '.' + date6.getFullYear());



console.log('------------7------------');
//7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
//найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
//количество раз, буква 'a'.
//
  


console.log('aa aba abba abbba abca abea'.replace(/ab+a/, '!'));

console.log('------------8------------');
//8. Дана почта пользователя test@mail.ru (можно использовать любую)
//Написать ф-цию, которая принимает почту и возвращает из нее логин -
//слово до знака @
//

let mailStr;

function CheckLog (login){
    
    
    
   return (login.replace(/(@)/, '$1')); 
    }

console.log(CheckLog('test123456@mail.ru'));





console.log('------------9------------');
//9. Напишите ф-цию строгой проверки ввода номер телефона в
//международном формате (<код страны> <код города или сети> <номер
//телефона>). Функция должна возвращать true или false. Используйте
//регулярные выражения.
//


let phone = '375 (44) 123-45-67'; //true
let phone1 = '375 (44)123-45-67'; //false
let regexp = /^[\d]{3}\ \([\d]{2,3}\)\ [\d]{3}-[\d]{2}-[\d]{2}$/;


console.log(regexp.test(phone));
console.log(regexp.test(phone1));


function CheckPhone(phoneNum){

    if(regexp.test(phoneNum)){
     return true;   
    }
    return false;
}

console.log(CheckPhone('375 (44) 123-45-67'));




console.log('------------10------------');
//10. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
//условия:
//    - весь адрес не должен содержать русские буквы и спецсимволы, кроме
//    одной «собачки», знака подчеркивания, дефиса и точки;
//    - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
//    имя может содержать только буквы, цифры, но не быть первыми и
//    единственными в имени;
//    - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
//    не может быть длиной менее 2 и более 11 символов.
//   
//    Функция должна возвращать true или false. Используйте регулярные
//    выражения.
//


let mail = 'malpa123@kor.com'; //true
let mail1 = 'malpa123@kor.com'; //false
regexp = /^[\w]{2}[\w-\.]@[a-z]{2,11}.[a-z]{2,11}$/gi;


console.log(regexp.test(mail));
console.log(regexp.test(mail));
console.log(regexp.test(mail));
console.log(regexp.test(mail));
console.log(regexp.test(mail1));


function CheckMail(email){

    if(regexp.test(email)){
     return true;   
    }
    return false;
}

console.log(CheckMail('ads@kor.com'));
console.log(CheckMail('ads@kor.com'));
console.log(CheckMail('ads@kor.com'));


console.log('------------11------------');
//11. Вам дана Grid таблица состоящая из массивов, в которых лежат буквы, а также массив с картой чисел, который поможет составить слово из этой Grid таблицы, например: 
//
//    ```
//     Grid таблица: 
//    
//     [
//         ['m', 'y', 'e'], 
//         ['x', 'a', 'm'], 
//         ['p', 'l', 'e']
//     ]
//     
//     карта чисел: 
//     
//     [1, 3, 5, 8]
//     
//    ```
//    Создайте единый массив из Grid таблицы (можно при помощи метода .flat()) и по нему составьте слово пользуясь картой чисел, чтобы в результате получилось, например:
//    
//        ```
//         'meal'
//         
//        ```
//    Результат функции должен вернуть строку
//    
//    [kata](https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e/train/javascript)
//    
//12. Здесь вам в аргументах даны 2 массива: 
//    
//    Нужно преобразовать каждый массив удалив в нем повторяющиеся числа.
//    
//    После чего склеить эти два массива, отсортировать и вернуть как результат
//
//    [kata](https://www.codewars.com/kata/56d949281b5fdc7666000004/train/javascript)
//    
//
//* Для быстрого составления регулярного выражения и проверки исп. онлайн-
//сервис https://regex101.com/.
//
//Для ввода значений можете использовать ф-цию prompt(), либо задавать
//значения при инициализации переменных в коде.
//Для вывода результатов скриптов вы можете использовать функции: alert()
//для вывода всплывающего окна; console.log() для вывода в консоль браузера;
//document.write() для вывода в «тело» HTML-документа.
//
//
//13. (задание сложности hard)
//    Напишите ф-цию, которая должна проверить правильность ввода адреса
//    эл. почты, неиспользуя регулярные выражения. 
//    
//    Почта верна при условии:
//    
//    a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
//    одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
//    быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
//    «.@» или «@@», «_@», «@-», «--» и т.п.
//    
//    b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
//    имя может содержать только буквы, цифры, но не быть первыми и
//    единственными в имени, и точку.
//    
//    c. после последней точки и после @, домен верхнего уровня (ru, by, com и
//    т.п.) не может быть длиной менее 2 и более 11 символов. 
//

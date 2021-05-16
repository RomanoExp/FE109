//Домашняя работа. Функции
//Используя полученные знания выполните сл. задания:
//1. Сделайте функцию, которая отнимает от первого числа второе и делит на
//третье. Числа передаются параметром.
//


let first = function (a, b, c) {
    return (a + b) / c;
}
console.log(first(10, 5, 3));


console.log('             ↓↓ ---2---  ↓↓');

//2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
//передается параметром.
//

function cube(a) {
    return ('Куб ' + Math.pow(a, 3));
}
console.log(cube(2));


function square(a) {
    return ('Квадрат ' + Math.pow(a, 2));
}
console.log(square(2));


console.log('             ↓↓   ---3---  ↓↓');

//3. Напишите функции min и max, которые возвращают меньшее и большее из
//чисел a и b.

let NumMin = function (a, b) {
    return ('Min ' + Math.min(a, b));

}

console.log(NumMin(95, 90));

let NumMax = function (a, b) {
    return ('Max ' + Math.max(a, b));
}

console.log(NumMax(4, 11));




console.log('           ↓↓   ---4---  ↓↓');

//4. Напишите две функции: первая ф-ция должна возвращать массив с
//числовыми значениями, диапазон которых должен вводиться пользователем
//с клавиатуры; вторая – выводить полученный массив.
//

let ArrNum1 = [];

let Num1 = function (aNum, bNum) {
    if (Number.isInteger(aNum) == false || Number.isInteger(bNum) == false) {
        return ('Введите число!')
    } else if (aNum < bNum) {
        for (i = aNum; i <= bNum; i++) {
            ArrNum1.push(i);
        }

    } else if (aNum > bNum) {
        for (i = aNum; i >= bNum; i--) {
            ArrNum1.push(i);
        }
    }
    return ArrNum1;

}

console.log(Num1(+prompt('число a'), +prompt('число b')));




console.log('           ↓↓  ---5---  ↓↓');

//5. Сделайте функцию isEven() (even - это четный), которая параметром
//принимает целое число и проверяет: четное оно или нет. Если четное - пусть
//функция возвращает true, если нечетное — false.
//

let isEven = function (a) {
    if (Number.isInteger(a) != true) {
        return 'Введите целое число';

    } else if (a % 2 == 0) {
        return true;
    }
    return false;
}


console.log(isEven(+prompt('Проверка на чётность')));





console.log('             ↓↓   ---6---  ↓↓');

//6. Напишите ф-цию, в которую передается массив с целыми числами.
//Верните новый массив, где останутся лежать только четные из этих чисел.
//Для этого используйте вспомогательную функцию isEven из предыдущей
//задачи.
//
let NewArr6 = [];
let PushArr = function (arr6) {

    for (i = 0; i < arr6.length; i++) {
        if ((isEven(arr6[i])) == true) {
            NewArr6.push(arr6[i]);
        }
        continue;
    }
    return NewArr6;
}

console.log(PushArr([1, 8, 12, 15, 105, 77, 90, -12, 5, -14, 22, 38]));


console.log('           ↓↓ ---7---  ↓↓');


//7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
//циклы):
//    
//    ```
//    1
//    22
//    333
//    4444
//    55555
//    666666
//    7777777
//    88888888
//    999999999
//    ```
function pyramid(x) {
    for (i = 1; i <= x; i++) {
        for (j = 1; j <= i; j++) {
            document.write(i);
        }
        document.write('<br>');
    }
}

console.log(pyramid(7));



console.log('------------------------');

//
//    Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
//    параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
//    кроме пробела, то пирамида должна быть нарисована этим символом,
//    например:
//    
//    ```
//    *
//    **
//    ***
//    ****
//    *****
//    ******
//    *******
//    ********
//    *********
//    ```
//


let symbol = prompt('символ');

function pyramidPlus(n) {
    for (i = 1; i <= n; i++) {
        let m = '';
        for (j = 0; j < i; j++) {
            m += symbol == undefined || symbol.length - 1 || symbol == ' ' ? i : symbol;
        };
        console.log(m + '\n')
    }
}

pyramidPlus(prompt('число'))







console.log('               ↓↓  ---8---  ↓↓');

//8. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.
//


function Arr8(ar) {
    alert(ar[0]);
    ar.splice(0, 1);
    if (ar.length > 0) {
        Arr8(ar);
    }
}

console.log(Arr8([1, 22, 5, 57, 7]));



console.log('                ↓↓  ---9---  ↓↓');



//9. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

let today = new Date();

console.log('Сейчас ' + today.getHours() + ' часов');

function Hello(FirstName) {
    if (today.getHours() >= 0 && today.getHours() < 6) {
        return (`Доброй ночи, ${FirstName}`);
    }
    if (today.getHours() >= 6 && today.getHours() < 12) {
        return (`Доброе утро, ${FirstName}`);
    }
    if (today.getHours() >= 12 && today.getHours() < 18) {
        return (`Добрый день, ${FirstName}`);
    }
    if (today.getHours() >= 18 && today.getHours() < 24) {
        return (`Добрый вечер, ${FirstName}`);
    }
}
console.log(Hello('Иван'));

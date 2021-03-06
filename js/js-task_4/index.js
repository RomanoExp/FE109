//Домашняя работа.
//«Массивы»
//
//Задание:
//1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
//элементы на экран.
//

let arrNum = [1, 2, 3, 4, 5];

for (i = 0; i < arrNum.length; i++) {

    console.log(arrNum[i]);
}


//2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
//быть положительными и отрицательными. Выведите на экран только отрицательные
//числа, которые больше -10, но меньше -3.
//

let arrP = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (i = 0; i < arrP.length; i++) {
    if (arrP[i] > -10 && arrP[i] < -3)
        document.write(arrP[i] + '</br>');
}



//3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
//while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
//массива. Запишите ее в переменную result и выведите.

let arrQ = [],
    result = 0,
    k = 0;

for (i = 23; i <= 57; i++) {
    arrQ.push(i);
    for (; k < i; k++) {

    }
    result += k;
}

console.log(arrQ);
console.log(`Сумма элементов массива ${result}`)



arrQ = [],
    i = 23;

while (i <= 57) {

    arrQ.push(i);
    i++;

}

console.log(arrQ);



//
//arrQ = [],
//    i = 23;
//
//while (i <= 57) {
//arrQ.push(i);
//    i++;
//    console.log(arrQ);
//    
//}


//4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
//

let arrS = ['10', '20', '30', '50', '235', '3000'];

for (i = 0; i < arrS.length; i++) {
    if (arrS[i][0] == '1' || arrS[i][0] == '2' || arrS[i][0] == '5')
        console.log(arrS[i]);

}



//5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
//дни недели, а выходные дни выведите жирным.
//

let arrDay = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (i = 0; i < arrDay.length; i++) {
    if (i < 5) {
        document.write(arrDay[i] + '</br>');
    } else {
        document.write('<b> ' + arrDay[i] + '</b>' + '</br>');
    }

}

//6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
//и получите последний элемент массива, используя свойство length.
//

let arrTop = [1, 22, 5, 877, 1];

arrTop.push('pum-purum-pum');

console.log(arrTop[arrTop.length - 1]);




//7. Запросите у пользователя по очереди числовые значения при помощи prompt и
//сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
//значение. Выведите получившийся массив на экран. Выполните сортировку чисел
//массива, и выведите его на экран.
//
//Напишите код, который:
//
//    Запрашивает по очереди значения при помощи prompt и сохраняет их
//    в массиве.
//    Заканчивает ввод, как только посетитель введёт пустую строку,
//    не число или нажмёт «Отмена».
//    При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
//    Выводит сумму всех значений массива



let numb,
    sum = 0,
    j = 0,
    arrN = [];

while (true) {
    numb = prompt('Введите число');
    if (numb === ' ' || numb == null || isNaN(numb)) {
        break;
    } else {
        arrN.push(numb);
        sum += +numb;
        j++;
    }

}
console.log(arrN);
console.log('Сумма = ' + sum);




//8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
//используя цикл while и метод reverse.
//

let arrSt = [12, false, 'Текст', 4, 2, -5, 0],
    arrStt = [];

console.log(arrSt);


for (i = 0; i < arrSt.length; i++) {
    arrStt.unshift(arrSt[i]);

}
console.log(arrStt);
console.log(arrSt.reverse(arrSt));




//9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
//целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].
//

let arr5 = [5, 9, 21, , , 9, 78, , , , 6],
    sumN = 0;

for (i = 0; i < arr5.length; i++) {
    if ((arr5[i]) !== undefined) {
        continue;
    }
    sumN += 1;
    console.log(`Пустые индексы массива ${i}`);
}
console.log(arr5);
console.log(`Пустых элементов всего ${sumN}`);




//10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями
//в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
//более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
//[1,8,0,13,76,8,7,0,22,0,2,3,2].
//
//
//let arrTest = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2],
//    val = 0,
//    sumTest = 0;
//
//console.log(arrTest);
//
//for (i = 0; i < arrTest.length; i++) {
//    val = arrTest[i];
//    if (val > 0) {
//
//    }
//
//}
//
//console.log(arrTest);
//





//11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
//пользователь. Например: высота = 5, на экране:
//
//```
//         ^
//        ^ ^
//       ^ ^ ^
//      ^ ^ ^ ^
//     ^ ^ ^ ^ ^
//```
//
//Для ввода значений можете использовать ф-цию prompt(), либо задавать значения при
//инициализации переменных в коде.
//Для вывода результатов скриптов вы можете использовать функции: alert() для вывода
//всплывающего окна; console.log() для вывода в консоль браузера; document.write() для вывода
//в «тело» HTML-документа.
//
//Задание *** опционально
//

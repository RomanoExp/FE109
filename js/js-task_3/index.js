//
// Домашняя работа.
//«Циклы do... while, while, for. Вложенные циклы.»
//
//Задание:
//
//1. Выведите числа от 1 до 50 и от 35 до 8.
//

let i = 1;

while (i <= 50) {
    console.log(i);
    i++;
}

i = 38;

while (i >= 8) {
    console.log(i);
    i--;
}




//2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
//тегом <br /> друг от друга, чтобы получить столбец, а не строку.

i = 89;

while (i >= 11) {
    document.write(i + '</br>');
    i--;

}


//3. С помощью цикла найдите сумму чисел от 0 до 100.

a = 100;
let sum = 0;

for (i = 0; i <= a; i++) {

    sum = 0;

    for (let j = 0; j <= i; j++) {
        sum += j;

    }
}

console.log('Сумма ' + ' = ' + sum);


//4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
//(1+2+3).
//

a = 5;
sum = 0;

for (i = 0; i <= a; i++) {

    sum = 0;

    for (j = 0; j <= i; j++) {
        sum += j;

    }
    console.log('Сумма ' + i + ' = ' + sum);

}



//5. Выведите чётные числа от 8 до 56. Решить задание через while и for.


while(i <= 56){
    for(i = 8; i <= 56; i++){
     
       if(i % 2 = 1) continue;
    } 
    console.log(i); 
}






//6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
//    ```
//    2*2 = 4
//    2*3 = 6
//    2*4 = 8
//    2*5 = 10
//    ...
//    3*1=3
//    3*2=6
//    3*3=9
//    3*4=12
//    ```
//
//7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
//меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
//для этого (итерация - это проход цикла), и запишите его в переменную num.
//
//8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
//тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
//общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
//число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
//может ввести отрицательное значение.
//
//9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.
//
//10. Дано произвольное целое число n. Написать программу, которая:
//
//a. разбивает число n на цифры и выводит их на экран;
//
//b. подсчитывает сколько цифр в числе n;
//
//c. находит сумму цифр числа n;
//
//d. меняет порядок цифр числа n на обратный.
//
//Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.
//Для ввода значений можете использовать ф-цию prompt(), либо задавать значения при
//инициализации переменных в коде.
//
//Для вывода результатов скриптов вы можете использовать функции: alert() для вывода
//всплывающего окна; console.log() для вывода в консоль браузера; document.write() для вывода
//в «тело» HTML-документа.
//

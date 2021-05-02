//1) Определите переменные str, sum, num, flag и txt со значениями «Привет», 123, 15.8,
//   true, «true», соответственно. При помощи оператора определения типа (typeof)
//   убедитесь, что переменные принадлежат типам: string, number или boolean. Выведите в
//   консоль (console.log()) типы операторов.
//

let str = 'Привет',
    sum = 123,
    num = 15.8,
    flag = true,
    txt = 'true';
console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);

//2) Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9,
//   a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль результат выражений:
//  Проверьте (выведите в консоль) каким типам принадлежат переменные.

let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = '123',
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);



//3) Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром
//   основания равным значению переменной a7 из задания 2, результат поместите в
//   переменную VCilindra

let VCilindra = Math.PI * Math.pow((a7 / 2), 2) * 10;
console.log(VCilindra + 'm');


//   
//4) Найдите площадь круга (SKruga) с радиусом 5см (r)

let SKruga = Math.PI * Math.pow(5, 2);
console.log(SKruga + 'cm');


//   
//5) Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см
//   (h)

let a = 5,
    b = 7,
    h = 10,
    STrap = (a + b) / 2 * h;
console.log(STrap + 'cm');


//   
//6) Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
//   ```html 
//   a+2(x-b)=16;
//   b(x+15)=a+6x;
//   x+2x+ax+bx=23780
//   ```

a = 8;
b = 3;
let x = (16 - a) / 2 + b;
console.log(x);

x = (a - 15 * b) / (b - 6);
console.log(x);

x = 23780 / (b + a + 3);
console.log(x);

//   
//7) Есть восемь текстовых строк (создайте 8 переменных), составьте из них грамотные по
//   смыслу предложения (1 абзац, переменная text):
//   ```html 
//   1. «индо земля зашаталась под ногами-и вырос,»;
//   2. «и заревел он голосом диким...»;
//   3. «блеснула молния и ударил гром,»;
//   4. «а так какое-то чудище, страшное и мохнатое,»;
//   5. «как будто из-под земли, перед купцом:»;
//   6. «Он подошёл и сорвал аленький цветочек.»;
//   7. «зверь не зверь, человек не человек,»;
//   8. «В ту же минуту, безо всяких туч,». 
//   ```

let str1 = 'индо земля зашаталась под ногами-и вырос,',
    str2 = 'и заревел он голосом диким...',
    str3 = 'блеснула молния и ударил гром,',
    str4 = 'а так какое-то чудище, страшное и мохнатое,',
    str5 = 'как будто из-под земли, перед купцом:',
    str6 = 'Он подошёл и сорвал аленький цветочек.',
    str7 = 'зверь не зверь, человек не человек,',
    str8 = 'В ту же минуту, безо всяких туч,',
    text;
console.log(text = str6 + ' ' + str8 + ' ' + str3 + ' ' + str1 + ' ' + str5 + ' ' + str7 + ' ' + str4 + ' ' + str2); 
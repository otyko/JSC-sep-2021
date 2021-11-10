// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let i = 1;
let f = 10;
let g = -999;
let h = 123;
let j = 3.14;
let k = 2.7;
let l = 16;
let z = true;
let x = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a, b, c, d, i, f, g, h, j, k, l, z, x);
alert(a + ' ' + b + ' ' + c + ' ' + d + ' ' + i + ' ' + f + ' ' + g + ' ' + h + ' ' + j + ' ' + ' ' + k + ' ' + l + ' ' + z + ' ' + x);
document.write(a + ' ' + b + ' ' + c + ' ' + d + ' ' + i + ' ' + f + ' ' + g + ' ' + h + ' ' + j + ' ' + ' ' + k + ' ' + l + ' ' + z + ' ' + x);


// - Переприсвоїти кожній змінній з завдання значення на довільне.

a = 'a';
b = 's';
c = 'd';
d = 'f';
i = 2;
f = 1;
g = 3;
h = 4;
j = 5;
k = 6;
l = 7;
z = false;
x = true;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(a, b, c, d, i, f, g, h, j, k, l, z, x);
alert(a + ' ' + b + ' ' + c + ' ' + d + ' ' + i + ' ' + f + ' ' + g + ' ' + h + ' ' + j + ' ' + ' ' + k + ' ' + l + ' ' + z + ' ' + x);
document.write(`<br>` + a + ' ' + b + ' ' + c + ' ' + d + ' ' + i + ' ' + f + ' ' + g + ' ' + h + ' ' + j + ' ' + ' ' + k + ' ' + l + ' ' + z + ' ' + x);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Oleh';
let middleName = 'Petrovych';
let lastName = 'Tymosenko';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name1 = prompt('');
let fatherName = prompt('');
let age1 = prompt('')
document.write('"' + 'Вітаю' + ' ' +
    '*' + name1 + '*' + ' ' + '*' + fatherName + '*' + '.' + ' ' + 'Тобі' + ' ' + '*' + age1 + '*' + ' ' + 'років' + '"' + '.'
);
console.log('"' + 'Вітаю' + ' ' +
    '*' + name1 + '*' + ' ' + '*' + fatherName + '*' + '.' + ' ' + 'Тобі' + ' ' + '*' + age1 + '*' + ' ' + 'років' + '"' + '.'
);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
a = 100;
console.log(typeof a);
b = '100';
console.log(typeof b);
c = true;
console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

// 5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 = 6 -> false
// 10 = 10 -> true
// 10 >= 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 != 10 -> false
// 123 ==='123' -> false
// 123 == '123' -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//     let a = 5;
// document.write(str + a + "<br/>");205
// document.write(str - a + "<br/>");15
// document.write(str * "2" + "<br/>");40
// document.write(str / 2 + "<br/>");10

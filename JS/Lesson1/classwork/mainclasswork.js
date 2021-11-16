// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let getArrRandom = [];
let result = 0;
for (let r = 0; ; r++) {
    let getNumRandom = Math.random(r);
    getArrRandom.push(getNumRandom);
    result += getArrRandom[r];
    if (getArrRandom.length === 10) {
        break;
    }
}
console.log(getArrRandom);
console.log(result);


// // 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {name: 'КАК не упасть духом', numberOfPages: 731, genre: 'story'};

// // 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {name: 'КАК не упасть духом', numberOfPages: 731, genre: 'story', author: 'nik'};

// // 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [
    {name: 'КАК не упасть духом', numberOfPages: 731, genre: 'story', author: 'nik'},
    {name: 'КАК не упасть ', numberOfPages: 31, genre: 'story', author: 'tom'},
    {name: ' не упасть духом', numberOfPages: 71, genre: 'story', author: 'braun'}
];
for (let i = 0; i < books.length; i++) {
    const book1 = books[i];
    console.log(book1);
}
;

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let v = 2 * Math.PI * Math.pow((dC / 2), 2) * heightC;
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let giP = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(giP);
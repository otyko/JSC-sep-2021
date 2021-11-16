// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Enter number');
let num2 = +prompt('Enter number');
if (num1 > num2) {
    console.log(num1)
} else if (num1 < num2) {
    console.log(num2)
} else {
    console.log('numbers are equal')
}
;

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let numFlet = +prompt('Enter number of flat');
if (1 <= numFlet && numFlet <= 20 && numFlet != 0) {
    console.log('first entrance')
} else if (21 <= numFlet && numFlet <= 48) {
    console.log('second entrance')
} else if (49 <= numFlet && numFlet <= 90) {
    console.log('third entrance')
} else {
    console.log('there is no such apartment number')
}
;

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = +prompt('Enter number');
if (number === 10) {
    alert('correctly')
} else {
    alert('wrong')
}
;

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let y = ;
// if (typeof y === 'number') {
//     console.log('1')
// } else if (typeof y === 'string') {
//     console.log('2')
// } else if (typeof y === 'boolean') {
//     console.log('3')
// } else if (typeof y === 'object') {
//     console.log('3')
// } else {
//     console.log(false)
// }
// ;

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = +prompt('enter temperature');
if (10 <= temperature && temperature <= 22) {
    document.write('ми йдемо ВЧИТИСЯ ')
} else {
    document.write('сидимо вдома і вчимося ОНЛАЙН')
}
;

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let x = prompt('enter number from 1 to 5');
switch (x) {
    case '1':
        console.log("Car");
        break;
    case '2':
        console.log("Bike");
        break;
    case '3':
        console.log("phone");
        break;
    case '4':
        console.log("watch");
        break;
    case '5':
        console.log("laptop");
        break;
    default:
        console.log("Wrong number");
}
;
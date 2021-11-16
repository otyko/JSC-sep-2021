// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arrNum = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while

let j = 0;
while (j <= arrNum.length - 1) {
    console.log(arrNum[j]);
    j++;
}

//     2. перебрати його циклом for

for (let num of arrNum) {
    console.log(num);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let num1 = 0;
while (num1 <= arrNum.length - 1) {
    if (num1 % 2 !== 0) {
        console.log(num1, arrNum[num1]);
    }
    num1++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i <= arrNum.length; i++) {
    if (i % 2 !== 0) {
        console.log(i, arrNum[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let i = 0;
while (i <= arrNum.length - 1) {
    if (arrNum[i] % 2 === 0) {
        console.log(arrNum[i]);
    }
    i++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let num of arrNum) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let num = 0; num <= arrNum.length - 1; num++) {
    if (arrNum[num] % 3 === 0) {
        arrNum[num] = "okten";
    }
}
console.log(arrNum);

// 8. вивести масив в зворотньому порядку.

let arrMir = [];
for (let w = arrNum.length - 1; w >= 0; w--) {
    arrMir[w] = arrNum.shift(w);
}
arrNum = arrMir;
console.log(arrNum);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

 arrNum = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1.b перебрати його циклом while

let q = arrNum.length - 1;
while (q >= 0) {
    console.log(arrNum[q]);
    q--;
}

//     2.b перебрати його циклом for

for (let i = arrNum.length - 1; i >= 0; i--) {
    console.log(arrNum[i]);
}

//     3.b перебрати циклом while та вивести  числа тільки з непарним індексом

let nu1 = arrNum.length - 1;
while (nu1 >= 0) {
    if (nu1 % 2 !== 0) {
        console.log(nu1, arrNum[nu1]);
    }
    nu1--;
}

//     4.b перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = arrNum.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(i, arrNum[i]);
    }
}

// 5.b перебрати циклом while та вивести  числа тільки парні  значення


while (i >= 0) {
    if (arrNum[i] % 2 === 0) {
        console.log(arrNum[i]);
    }
    i--;
}

// 6.b перебрати циклом for та вивести  числа тільки парні  значення

for (let num = arrNum.length - 1; num >= 0; num--) {
    if (arrNum[num] % 2 === 0) {
        console.log(arrNum[num]);
    }
}

// 7.b замінити кожне число кратне 3 на слово "okten"

for (let num = arrNum.length - 1; num >= 0; num--) {
    if (arrNum[num] % 3 === 0) {
        arrNum[num] = "okten";
    }
    console.log(num, arrNum[num]);
}
console.log(arrNum);
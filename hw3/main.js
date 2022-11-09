// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x =+prompt('Write number');
// console.log(x)
// if (x!==0) {
//     console.log('true')
// }
// if (x==0) {
//     console.log('false')
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt('Write number from 1 till 59');
//
// if (time < 15) {
//     console.log('1 quarter')
// } else if (time < 30) {
//     console.log('2 quarter')
// } else if (time < 45) {
//     console.log('3quarter')
// } else if (time < 60) {
//     console.log('4 quarter')
// }
//

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('Write number from 1 till 30');
//
// if (day < 10) {
//     console.log('1 декадa')
// } else if (day < 20) {
//     console.log('2 декадa')
// } else if (day < 31) {
//     console.log('3 декадa')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = +prompt('Write number from 1 till 7');
// switch (day) {
//     case 1:
//         console.log('sunday')
//         break;
//     case 2:
//         console.log('monday')
//         break;
//     case 3:
//         console.log('tuesday')
//         break;
//     case 4:
//         console.log('wednesday')
//         break;
//     case 5:
//         console.log('thursday')
//         break;
//     case 6:
//         console.log('friday')
//         break;
//     case 7:
//         console.log('saturday')
//         break;
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 66;
let b = 86;
let c = (a > b) ? a : b;
console.log(c)
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
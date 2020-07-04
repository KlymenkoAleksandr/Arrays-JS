// Задание 1:
// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран.

let numbers = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Задание 2:
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for и оператора if выведите в консоль нечетные элементы массива.

let odd = [1, 2, 3, 4, 5];

for (let i = 0; i < odd.length; i++) {
    if (i % 2 === 0) {
        console.log(odd[i]);
    }
}

// Задание 3:
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.

let mul = [1, 2, 3, 4, 5];
c = 1;

for (let i = 0; i < mul.length; i++) {
    c *= mul[i];
}
console.log(c);

// Задание 4:
// Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

let numberRange = [2, 5, 9, 15, 1, 4];

for (let i = 0; i < numberRange.length; i++) {
    if (numberRange[i] > 3 && numberRange[i] < 10) {
        console.log(numberRange[i]);
    }
}

// Задание 5:
// Дан массив arr (заполните любыми значениями). Найдите среднее арифметическое его элементов (сумма делить на количество). 

let arr = [2, 5, 15, 3, 9];
b = 0;

for (let i = 0; i < arr.length; i++) {
    b += arr[i];
}
console.log(b / arr.length);

// Задание 7:
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let weekDays = ['Поннедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];


for (let i = 0; i < weekDays.length; i++) {
    if (weekDays[i] === weekDays[weekDays.length - 1]) {
        document.write(
            `<span style='font-weight: bold'>${weekDays[weekDays.length - 1]}</span>` 
        );
    } else if (weekDays[i] === weekDays[weekDays.length - 2]) {
        document.write(
            `<span style='font-weight: bold'>${weekDays[weekDays.length - 2]}, </span>` 
        );
    } else {
        document.write(
            `<span>${weekDays[i]}, </span>`
        );    
    }
}

// Задание 8:
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

let elem = [2, 5, 10, 2, 5];
let removed;

function removeDuplicates(elem) {
    for (let i = 0; i < elem.length; i++) {
        if (elem[0] === elem[i]) {
            removed = elem.splice(elem[i]);
        }
        return removed;
    }
}
removeDuplicates(elem);

console.log(removed);

// Задание 10:
// Найдите минимальный и максимальный элемент в массиве.

let minMax = [4, 1, 6, 12, 135, 9];

let min = Math.min(...minMax);
let max = Math.max(...minMax);


console.log(min, max);

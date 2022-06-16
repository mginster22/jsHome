// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = arr1.concat(arr2);
console.log(arr3);


// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const arr4 = [1,2,3];

const reversedArr = arr4.reverse();
console.log(reversedArr);


// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

let arr5 = [1,2,3];

arr5.push(4,5,6);
console.log(arr5);


// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let arr6 = [1, 2, 3];

arr6.unshift(4, 5, 6);
console.log(arr6);


// 5. Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.

const arr7 = ['js', 'css', 'html'];
const firstElementArray = arr7.shift();
console.log(firstElementArray);


// 6. Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.

const arr8 = ["js", "css", "html"];
const lastElementArray = arr8.pop();
console.log(lastElementArray);


// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

const arr9 = [1,2,3,4,5];
const newArr1 = arr9.slice(0,3);
console.log(newArr1);


// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const arr10 = [1, 2, 3, 4, 5];
const newArr2 = arr10.slice(-2);
console.log(newArr2);


// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

const arr11 = [1,2,3,4,5];
arr11.splice(1,2);
console.log(arr11);


// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

const arr12 = [1, 2, 3, 4, 5];
const newArr3 = arr12.splice(1, 3);
console.log(newArr3);


// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const arr13 = [1, 2, 3, 4, 5];
arr13.splice(3, 0, 'a', 'b', 'c');
console.log(arr13);


// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const arr14 = [1, 2, 3, 4, 5];
arr14.splice(1, 0, "a", "b");
arr14.splice(5, 0, "c");
console.log(arr14);


// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arr15 = [3,4,1,2,7];
console.log(arr15.sort());


// 14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

const object = {
  js: "test",
  jq: "hello",
  css: "world",
};

console.log(Object.keys(object));


// Задания с функциями

// 1. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет.
//fisrt way

const arr16 = ['a', 'b', 'c', 'd'];

const hasElem1 = function (arr16, string) {
  return arr16.indexOf(string) !== -1;
};

console.log(hasElem1(arr16, 'c'));

//second way

const arr17 = ["a", "b", "c", "d"];

const hasElem2 = function (arr17, string) {
  return arr17.includes(string);
};

console.log(hasElem2(arr17, "c"));

// 2. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

const arr18 = [1,2,3,4,5,6,7,8,9,10];

const hasNumber = function (arr18, num) {
  return arr18.includes(num);
};

console.log(hasNumber(arr18, 7));

// 3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true  [2,2,1], а если нет - вернуть false [1,2,1].

const arr19 = [1, 2, 2];

const hasSameNumberSideBySide = function (arr19) {
  return arr19.some(function (elem, i, arr19) {
    return i !== 0 && elem === arr19[i - 1];
  });
};

console.log(hasSameNumberSideBySide(arr19));

// 4. Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()

function getRandomArray(min, max, amount) {
  let arr20 = [];
  for (let i = 0; i < amount; i++) {
    arr20.push(Math.round(Math.random() * (max - min) + min));
    
  }
  return arr20;
}

console.log(getRandomArray(5, 33, 10));

// 5. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const arr21 = [12, 15, 20, 25, 59, 79];

const getArithmeticalMeanArray = function (arr21) {
  if (arr21.length !== 0) {
    return (
      arr21.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }) / arr21.length
    );
  }
  return 'Error, Array empty!'
};

console.log(getArithmeticalMeanArray(arr21));
// 1.CONCAT
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = arr1.concat(arr2);
console.log(result);

//2.REVERSE
const arr3 = [1, 2, 3];
const result2 = arr3.reverse();
console.log(result2);

//3.4.PUSH,UNSHIFT
const arr4 = [1, 2, 3];
arr4.push(4, 5, 6);
arr4.unshift(4, 5, 6);
console.log(arr4);

//5.6.SHIFT,POP
// const arr5 = ["js", "css", "html"];
// console.log(arr5);
// alert(arr5[0]);
// arr5.shift();
// alert(arr5[1]);
// arr5.pop();
// console.log(arr5);

//7.9.SLICE
const arr6 = [1, 2, 3, 4, 5];
const arr7 = arr6.slice(0, 3);
const arr8 = arr6.slice(3);
console.log(arr7);
console.log(arr8);

//9-12.SPLICE
//9.
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);
//10.
const arr10 = [1, 2, 3, 4, 5];
const arr11 = arr10.splice(1, 3);
console.log(arr11);
//11.
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(3, 0, "a", "b", "c");
console.log(arr12);
//12.
const arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 0, "a", "b");
arr13.splice(6, 0, "c");
arr13.splice(8, 0, "e");
console.log(arr13);

//13.SORT
const arr14 = [3, 4, 1, 2, 7];
arr14.sort();
console.log(arr14);

//14.Object.keys
const obj = {
  js: "test",
  jq: "hello",
  css: "word",
};
console.log(Object.keys(obj));

// 1. Необходимо создать функцию hasElem, которая параметрами будет
// принимать массив и строку, и возвращать true, если строка есть в
// массиве, и false - если нет

const hasElem = function (arr, str) {
  return arr.includes(str);
};
console.log(hasElem(array1, "c"));

//2. Дан массив с числами. Проверьте, что в этом массиве есть указанное
// число. Если есть - вернуть true, а если нет - вернуть false.

const checkThisNumOnArray = function (arr, num) {
  return arr.includes(num);
};
console.log(checkThisNumOnArray(array2, 2));

// 3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа
// подряд. Если есть - вернуть true [2,2,1], а если нет - вернуть false [1,2,1].

const checkIdenticalNum = function (arr) {
  return arr.some(function (elem, i, arr) {
    return i !== 0 && elem === arr[i - 1];
  });
};
console.log(checkIdenticalNum(array3));

//4.Math.random
const getArray10RandomNum = function (min, max, amount) {
  let array = [];
  for (let i = 0; i < amount; i++) {
    array.push(Math.round(Math.random() * (max - min) + min));
  }
  return array;
};
console.log(getArray10RandomNum(5, 33, 10));
// 5. Дан массивarr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const getArifmeticMean = function (arr) {
  return (
    arr.reduce(function (value1, value2) {
      return value1 + value2;
    }) / arr.length
  );
};
console.log(getArifmeticMean(array4));

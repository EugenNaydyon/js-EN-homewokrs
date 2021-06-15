//====== TASK 01 Метод forEach(callback) ======
//function calculateTotalPrice(orderedItems) {
//let totalPrice = 0;
// Пиши код ниже этой строки
//orderedItems.forEach(function (item) {
//totalPrice += item;
//});
//for (let i = 0; i < orderedItems.length; i += 1) {
//totalPrice += orderedItems[i];
//console.log(totalPrice);
//}
//console.log(totalPrice);

// Пиши код выше этой строки
//return totalPrice;
//}

//calculateTotalPrice([3, 4, 23]);

//====== TASK 02 Задача. Фильтрация массива чисел ======
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//     // console.log(filteredNumbers);
//     // return filteredNumbers;
//   });
//   console.log(filteredNumbers);
//   return filteredNumbers;
//   //for (let i = 0; i < numbers.length; i += 1) {
//   //if (numbers[i] > value) {
//   //filteredNumbers.push(numbers[i]);
//   //}
// }

// // Пиши код выше этой строки
// //return filteredNumbers;
// //}
// filterArray([1, 2, 3, 4, 5], 3);

//====== TASK 03 Задача. Общие элементы ======
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки
//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   console.log(commonElements);
//   return commonElements;
//   // Пиши код выше этой строки
// }
// getCommonElements([1, 2, 3], [2, 4]); // возвращает [2].
// getCommonElements([1, 2, 3], [2, 1, 17, 19]); // возвращает [1, 2].
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // возвращает [12, 27, 3].
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // возвращает [10, 30, 40].
// getCommonElements([1, 2, 3], [10, 20, 30]); // возвращает []

//====== TASK 04 Стрелочные функции. ======
// Пиши код ниже этой строки

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// };

//====== TASK 05 Неявный возврат ======
// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// // Пиши код выше этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// // Пиши код выше этой строки

//====== TASK 06 Стрелочные функции как коллбеки ======
// Пиши код ниже этой строки
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Пиши код выше этой строки

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   console.log(totalPrice);
//   return totalPrice;
// };
// calculateTotalPrice([12, 85, 37, 4]); // возвращает 138.
// calculateTotalPrice([164, 48, 291]); // возвращает 503.
// calculateTotalPrice([412, 371, 94, 63, 176]); // возвращает 1116

//====== TASK 07 Задача. Фильтрация массива чисел 2.0 ======
// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   console.log(filteredNumbers);
//   return filteredNumbers;
// };
// filterArray([1, 2, 3, 4, 5], 3); // возвращает [4, 5].
// filterArray([1, 2, 3, 4, 5], 4); // возвращает [5].
// filterArray([1, 2, 3, 4, 5], 5); // возвращает [].
// filterArray([12, 24, 8, 41, 76], 38); // возвращает [41, 76].
// filterArray([12, 24, 8, 41, 76], 20); // возвращает [24, 41, 76]

//====== TASK 08 Задача. Общие элементы 2.0 ======
// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Пиши код выше этой строки
//   console.log(commonElements);
//   return commonElements;
// };
// getCommonElements([1, 2, 3], [2, 4]); // возвращает [2].
// getCommonElements([1, 2, 3], [2, 1, 17, 19]); // возвращает [1, 2].
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // возвращает [12, 27, 3].
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // возвращает [10, 30, 40].
// getCommonElements([1, 2, 3], [10, 20, 30]); // возвращает []

//====== TASK 09 Чистые функции ======
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Пиши код выше этой строки
// }

// const changeEven = (numbers, value) => {
//   const newNumbers = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newNumbers.push(number + value);
//     } else {
//       newNumbers.push(number);
//     }
//   });
//   console.log(newNumbers);
//   return newNumbers;
// };
// changeEven([1, 2, 3, 4, 5], 10); // возвращает новый массив [1, 12, 3, 14, 5].
// changeEven([2, 8, 3, 7, 4, 6], 10); // возвращает новый массив [12, 18, 3, 7, 14, 16].
// changeEven([17, 24, 68, 31, 42], 100); // возвращает новый массив [17, 124, 168, 31, 142].
// changeEven([44, 13, 81, 92, 36, 54], 100); // возвращает новый массив [144, 13, 81, 192, 136, 154]

//====== TASK 10 Метод map() ======
// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

//====== TASK 11 Метод map() и массив объектов ======

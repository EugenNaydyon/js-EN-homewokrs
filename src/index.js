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
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map((book) => book.title);
// console.table(titles);

//====== TASK 12 Метод flatMap() ======
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика"],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

//====== TASK 13 Задача. Имена пользователей ======
// Пиши код ниже этой строки
// const getUserNames = (users) => {
//   const userNames = users.map((user) => user.name);
//   console.log(userNames);
//   return userNames;
// };
// // Пиши код выше этой строки

// getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]);

//====== TASK 14 Задача. Почты пользователей ======
// const getUserEmails = (users) => {
//   const userEmail = users.map((user) => user.email);
//   console.log(userEmail);
//   return userEmail;
// };
// getUserEmails([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]);

//====== TASK 15 Методы filter и find ======
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(oddNumbers);

//====== TASK 16 Фильтрация уникальных элементов ======
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика", "мистика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика", "приключения"],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres);
// console.log(allGenres);

// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );
// console.log(uniqueGenres);

//====== TASK 17 Метод filter() и массив объектов ======
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Бернард Корнуэлл";
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// console.log(topRatedBooks);

// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(booksByAuthor);

//====== TASK 18 Задача. Пользователи с цветом глаз ======
// Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   const eyeColorFiltred = users.filter((user) => user.eyeColor === color);
//   console.log(eyeColorFiltred);
// };
// // Пиши код выше этой строки

// getUsersWithEyeColor(
//   [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ],
//   "green"
// );

//====== TASK 19 Задача. Пользователи в возрастной категории ======
// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {};

TEST of GitHUB Desctop
// Пиши код выше этой строки

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон

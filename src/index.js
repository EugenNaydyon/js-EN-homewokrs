// ====== TASK 01 Создание объекта =====

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);

// ====== TASK 02 Вложенные свойства =====
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.log(apartment);

// ====== TASK 03 Доступ к свойствам через точку =====
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city centre",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// console.log(aptRating);

// const aptDescr = apartment.descr;
// console.log(aptDescr);

// const aptPrice = apartment.price;
// console.log(aptPrice);

// const aptTags = apartment.tags;
// console.log(aptTags);
// // Change code above this line

// ====== TASK 04 Доступ к вложенным свойствам =====
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city centre",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// console.log(ownerName);

// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);

// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);

// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);

// const firstTag = apartment.tags[0];
// console.log(firstTag);

// const lastTag = apartment.tags[2];
// console.log(lastTag);
// // Change code above this line

// ====== TASK 05 Доступ к свойствам через квадратные скобки =====
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city centre",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// console.log(aptRating);

// const aptDescr = apartment["descr"];
// console.log(aptDescr);

// const aptPrice = apartment["price"];
// console.log(aptPrice);

// const aptTags = apartment["tags"];
// console.log(aptTags);

// ====== TASK 06 Изменение значения свойства =====
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city centre",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // цену в свойстве price на 5000;
// // рейтинг квартиры в свойстве rating на 4.7;
// // имя владельца во вложенном свойстве name на "Henry Sibola";
// // массив тегов в свойстве tags добавив в конец строку "trusted".

// apartment.price = 5000;
// console.log(apartment.price);

// apartment.rating = 4.7;
// console.log(apartment.rating);

// apartment.owner.name = "Henry Sibola";
// console.log(apartment.owner.name);

// apartment.tags.push("trusted");
// console.log(apartment.tags);

// ====== TASK 07 Добавление свойств =====
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city centre",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location.country);
// console.log(apartment.location.city);

// ====== TASK 08 Короткие свойства =====
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// ====== TASK 09 Вычисляемые свойства =====

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// console.log(credentials[emailInputName]);
// console.log(credentials[passwordInputName]);
// console.log(credentials);
// console.log(credentials.email);

// ====== TASK 10 Цикл for...in =====
// const apartment = {
//   descr: "Spacious apartment in the city centre",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// ====== TASK 11 Метод hasOwnProperty() =====
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city centre";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(keys);
// console.log(values);

// ПРИМЕР ================================
// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// ====== TASK 12 Задача. Подсчёт свойств =====
// function countProps(object) {
//   let propCount = 0;

//   propCount = Object.keys(object).length;
//   console.log(propCount);
//   return propCount;
// }
// countProps({}); // возвращает 0
// countProps({ name: "Mango", age: 2 }); // возвращает 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); // возвращает 3

// ====== TASK 13 Метод Object.keys() =====
// const apartment = {
//   descr: "Spacious apartment in the city centre",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   values.push(apartment[key]);
//   console.log(values);
// }

// // ====== TASK 14 Задача. Подсчёт свойств 2.0 =====
// function countProps(object) {
//   let propCount = 0;

//   propCount = Object.keys(object).length;
//   //   for (const key in object) {
//   //     if (object.hasOwnProperty(key)) {
//   //       propCount += 1;
//   //     }
//   //   }
//   console.log(propCount);
//   return propCount;
// }

// countProps({}); // возвращает 0
// countProps({ name: "Mango", age: 2 }); // возвращает 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); // возвращает 3

// ====== TASK 15 Метод Object.values() =====
// const apartment = {
//   descr: "Spacious apartment in the city centre",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// const values = Object.values(apartment);
// console.log(values);

// ====== TASK 16 Задача. Расходы на зарплату =====
// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   console.log(salaries);

//   const values = Object.values(salaries);
//   console.log(values);

//   for (const value of values) {
//     totalSalary += value;
//   }
//   console.log(totalSalary);
//   return totalSalary;
// }

// countTotalSalary({}); // возвращает 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); // возвращает 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); // возвращает 400

// ====== TASK 17 Массив объектов =====
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// // console.log(colors[1]);
// console.table(colors);
// for (const color of colors) {
//   console.log(color);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// ====== TASK 18 Задача. Поиск объекта по значению свойства =====
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     // console.log(product);
//     // console.log(product.name);
//     if (productName === product.name) {
//       console.log(product.name, product.price);
//     }
//     // console.log(null);
//   }
//   return null;
// }
// getProductPrice("Radar"); // возвращает 1300.
// getProductPrice("Grip"); // возвращает 1200.
// getProductPrice("Scanner"); // возвращает 2700.
// getProductPrice("Droid"); // возвращает 400.
// getProductPrice("Engine"); // возвращает null

// ====== TASK 19 Задача. Коллекция значений свойства =====
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const propValue = [];

//   for (const product of products) {
//     // console.log(product);
//     const keysProduct = Object.keys(product);
//     // console.log(keysProduct);

//     for (const key of keysProduct) {
//       if (key === propName) {
//         // console.log(product[key]);
//         propValue.push(product[key]);
//       }
//     }
//   }
//   console.log(propValue);
// }

// getAllPropValues("name"); // возвращает ["Radar", "Scanner", "Droid", "Grip"]
// // getAllPropValues("quantity"); // возвращает [4, 3, 7, 9]
// // getAllPropValues("price"); // возвращает [1300, 2700, 400, 1200]
// getAllPropValues("category"); // возвращает []

// ====== TASK 20 Задача. Общая стоимость товара =====
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     // console.log(product);
//     // console.log(product.name);
//     // console.log(product.price);
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   console.log(totalPrice);
// }

// calculateTotalPrice("Blaster"); // возвращает 0
// calculateTotalPrice("Radar"); // возвращает 5200
// calculateTotalPrice("Droid"); // возвращает 2800
// calculateTotalPrice("Grip"); // возвращает 10800
// calculateTotalPrice("Scanner"); // возвращает 8100

//======== example =======

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// /*
//  * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
//  * Первый элемент это ключ свойства, второй это значение.
//  */
// const entries = Object.entries(hotel);

// /*
//  * На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  * в переменную key, а второй (значение) в переменную value
//  */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

// /*
//  * name: Resort Hotel
//  * stars: 5
//  * capacity: 100
//  */

// ====== TASK 21 Деструктуризация объектов =====
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// const { yesterday, today, tomorrow } = highTemperatures;
// console.log(yesterday, today, tomorrow);
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// ====== TASK 22 Значения по умолчанию =====
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// console.log(highTemperatures);
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// ====== TASK 23 Изменение имени переменной =====
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// console.log(highTemperatures);

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

// ====== TASK 24 Деструктуризация в циклах =====
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// ====== TASK 25 Глубокая деструктуризация =====
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(highToday, lowToday, todayIcon);
// console.log(highTomorrow, lowTomorrow, tomorrowIcon);
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// ====== TASK 26 Паттерн «Объект настроек» =====
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {today: {low: todayLow, high: todayHigh},
//           tomorrow: {low: tomorrowLow, high: tomorrowHigh}
//    } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// ====== TASK 27 Операция spread при передаче аргументов =====
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// ====== TASK 28 Операция spread при создании нового массива =====
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// console.log(allScores);

// const bestScore = Math.max(...allScores);
// console.log(bestScore);

// const worstScore = Math.min(...allScores);
// console.log(worstScore);

// ====== TASK 29 Операция spread при создании нового объекта =====
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// ====== TASK 30 Задача. Карточки задач =====
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newData = { completed, category, priority, ...data };
//   // Change code above this line
//   console.log(newData);
//   return newData;
// }

// makeTask({}); // возвращает { category: "General", priority: "Normal", completed: false }
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }); // возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// makeTask({ category: "Finance", text: "Take interest" }); // возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// makeTask({ priority: "Low", text: "Choose shampoo" }); // возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// makeTask({ text: "Buy bread" }); // возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// ====== TASK 31 Операция rest для сбора всех аргументов функции =====
// Change code below this line
function add() {
  // Change code above this line
}

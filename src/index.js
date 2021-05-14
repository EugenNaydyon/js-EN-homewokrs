// ======== TASK 1 "объявление пеерменных" ===========

// Change code below this line
// const productName = "Droid";
// console.log(productName);
// // 'Droid'
// const pricePerItem = 2000;
// console.log(pricePerItem);
// 2000

// ===== TASK 2 "Переопределение значения переменной" ===========

// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line

// productName = "Repair droid";
// console.log(productName);

// pricePerItem = 2000 + 1500;
// console.log(pricePerItem);

// === TASK 3 "Типы примитивов (числа, строки, були)"" ====
// Change code below this line

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// console.log("topSpeed:", topSpeed);
// console.log("distance:", distance);
// console.log("login:", login);
// console.log("isOnline:", isOnline);
// console.log("isAdmin:", isAdmin);

// === TASK 4 "математические операторы" =======
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// console.log("totalPrice:", totalPrice);

// ====== TASK 5 "Шаблонные строки" ======

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// ==== TASK 6 Задача: заказ продукта ====
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// === TASK 7 Объявление и вызов функций ===
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }

// sayHi();

// === TASK 8 Параметры и аргументы ===
// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// === TASK 9 Возврат значения ===
// function add(a, b, c) {
//   // Change code below this line
//   return a + b + c;
//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//  === TASK 10 Шаблонные строки 2.0 ===
// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// makeMessage("Radar", 6150);
// makeMessage("Scanner", 3500);
// makeMessage("Reactor", 8000);
// makeMessage("Engine", 4070);

// === TASK 11 ЗадачаЖ математические операторы 2.0 ===
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// === TASK 12 Задача: заказ продукта 2.0 ===
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// === TASK 13 Операторы сравнения >, >=, < и <=  ===
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// === TASK 14 Операторы сравнения === и !==  ===
// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   const isMatch = SAVED_PASSWORD === password;

//   // Change code above this line
//   return isMatch;
// }

// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

// === TASK 15 Инструкция if...else ===
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   return message;
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// === TASK 16 Задача: склад товаров ===

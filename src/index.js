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
// function checkStorage(available, ordered) {
//   let message;

//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   console.log(message);
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// ==========TASK 17 Комбинированный оператор присвоения =============
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// ========== TASK 18 Задача: проверка баланса ===============
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line

//   const totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   console.log(message);
//   // Change code above this line
//   return message;
// }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// ========= TASK 19 Блок else...if ===========
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   console.log(message);
//   return message;
// }
// checkPassword(null);
// checkPassword("jqueryismyjam");
// checkPassword(2525);

// ======= TASK 20 Задача: склад товаров 2.0 ===========
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// ====== TASK 21 Логическое «И» (оператор &&) =========
// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && number <= end; // Change this line
//   console.log(isInRange);
//   return isInRange;
// }

// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// ====== TASK 22 Логическое «ИЛИ» (оператор ||)  ========
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
//   console.log(canAccessContent);
//   return canAccessContent;
// }

// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

// ======= TASK 23 Логическое «НЕ» (оператор !) =========
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line
//   console.log(isNotInRange);
//   return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// ==== TASK 24 Задача: расчёт скидки ====
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line

//   if (50000 <= totalSpent) {
//     discount = GOLD_DISCOUNT;
//   } else if (20000 <= totalSpent && totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (5000 <= totalSpent && totalSpent <= 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }

//   console.log(discount);
//   // Change code above this line
//   return discount;
// }

// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// ====== TASK 25 Тернарный оператор =========
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";

//   console.log(message);
//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// ===== TASK 26 Задача: проверка пароля =====

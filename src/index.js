// =============== TASK 01 ==============
// function makePizza() {
//   return "Ваша пицца готовится, ожидайте.";
// }
// // Пиши код ниже этой строки

// const result = makePizza();
// const pointer = makePizza;

// console.log(makePizza);
// console.log(makePizza());
// console.log("===================");
// console.log("Вызов функции:", result);
// console.log("Ссылка на функцию", pointer);

// =============== TASK 02 Колбэк-функции ==============

// function deliverPizza(pizzaName) {
// //   console.log(`Доставляем пиццу ${pizzaName}.`);
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
// //   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
// //   callback(pizzaName);
//     return callback(pizzaName);
// }

// makeMessage("Роял гранд", makePizza); // возвращает строку 'Пицца Роял гранд готовится, ожидайте...'
// makeMessage("Ультрасыр", deliverPizza); // возвращает строку 'Доставляем пиццу Ультрасыр.'

// =============== TASK 03 Инлайн-колбэки ==============
// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// // makePizza("Роял гранд", function deliverPizza(pizzaName) {
// //   console.log(`Доставляем пиццу ${pizzaName}.`);
// // });
// // Пиши код ниже этой строки

// makePizza("Ультрасыр", function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}`);
// });

// =============== TASK 04 Несколько колбэков ==============
// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//     }
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`);
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   console.log(`Ошибка! ${error}`);
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order("Аль Копчино", makePizza, onOrderError);
// pizzaPalace.order("Четыре нарезона", makePizza, onOrderError);
// pizzaPalace.order("Биг майк", makePizza, onOrderError);
// pizzaPalace.order("Венская", makePizza, onOrderError);

// =============== TASK 05 Контекст вызова функции ==============
// const pizzaPalace = {
//   pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// pizzaPalace.order('Аль Копчино');// возвращает строку 'Заказ принят, готовим пиццу «Аль Копчино».'.
// pizzaPalace.order('Четыре нарезона');// возвращает строку 'Заказ принят, готовим пиццу «Четыре нарезона».'.
// pizzaPalace.order('Биг майк';//);// возвращает строку 'В ассортименте нет пиццы с названием «Биг майк».'.
// pizzaPalace.order('Венская');// возвращает строку 'В ассортименте нет пиццы с названием «Венская».'

// ===== TASK 06 Задача. Аккаунт пользователя ======
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// ===== TASK 07 Метод call ======
const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
const messages = [];
// console.log(messages);
// console.log(orders.length);

function composeMessage(position) {
  // for (let i = 0; i >= orders.length; i += 1) {
  //   let orderState;
  console.log(orders.length);
  // }
}

orders.showOrederState = composeMessage;
// создал св-во объекта orders и присвоил ему ссылку на функцию;
console.log(orders);
orders.showOrederState(); // вызвал функцию composeMessage из метода объекта orders;

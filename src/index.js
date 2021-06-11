// ======== TASK 01 Прототип объекта и метод Object.create() ======
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);
// console.log(child);

// // Пиши код выше этой строки
// child.name = "Jason";
// child.age = 27;

// === TASK 02 Задача. Цепочка прототипов ====
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // parent.__proto__ = ancestor;
// // child.__proto__ = parent;

// console.log(child);
// // Пиши код выше этой строки

// === TASK 03 Функция-конструктор ====
// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const audi = new Car("Audi", "Q3", 36000);
// // получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
// console.log(audi);

// new Car("BMW", "X5", 58900); // получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
// new Car("Nissan", "Murano", 31700); // получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }

// === TASK 04 Объект настроек ===
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// === TASK 05 Свойство prototype ===
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// // Car({ brand, model, price });
// // Car.prototype.hasOwnProperty("getPrice"); // возвращает true.

// // console.log(Car.prototype.getPrice); // это функция.
// // console.log(Car.prototype.hasOwnProperty("changePrice"));
// // возвращает true.

// // Значение Car.prototype.changePrice это функция.
// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(`Price of ${audi.brand}:`, audi.getPrice());
// console.log(audi);
// //, вызов метода getPrice() вернет число 36000.

// // У объекта, созданного вызовом new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), вызов метода changePrice(35000) и последующем вызове getPrice() вернет число 35000.
// // audi.changePrice(35000);
// // console.log(`Price of ${audi.brand}:`, audi.getPrice());

// === TASK 06 Задача. Хранилище ===

// function Storage(items) {
//   this.items = items;
// }
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   return this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//   return this.items.splice(this.items.indexOf(item), 1);
// };

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// // storage.addItem("Дроид");
// // console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// // console.log(storage.items);
// // console.log(storage.items[2]);

// === TASK 07 Конструктор строк ===
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }
// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padStart = function (str) {
//   //console.log(`${str}${this.value}`);
//   this.value = `${str}${this.value}`;
//   //console.log(this.value);
//   //return `${str}${this.value}`;
// };
// StringBuilder.prototype.padEnd = function (str) {
//   //console.log(`${this.value}${str}`);
//   //return `${this.value}${str}`;
//   this.value = `${this.value}${str}`;
// };
// StringBuilder.prototype.padBoth = function (str) {
//   //console.log(`${str}${this.value}${str}`);
//   //return `${str}${this.value}${str}`;
//   this.value = `${str}${this.value}${str}`;
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder(".");
// //console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

// // === TASK 08 Объявление класса ===
// Задание
// Используя ключевое слово class объяви класс Car с пустым телом.

// Тесты
// Объявлен класс Car с пустым телом.
// Результат вызова new Car() это пустой объект.

// class Car { }

// === TASK 09 Конструктор класса ===
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// // == получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
// console.log(audi);

// const bmw = new Car({ brand: "BMW", model: "X5", price: 58900 });
// // == получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
// console.log(bmw);

// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// // == получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.
// console.log(nissan);

// === TASK 10 Методы класса ===
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// // Объявлен класс Car.

// // Конструктор класса принимает объект со свойствами brand, model и price.

// console.log(Car.prototype.hasOwnProperty("getPrice")); //  возвращает true.

// console.log(Car.prototype.getPrice); // Car.prototype.getPrice это функция.
// console.log(Car.prototype.hasOwnProperty("changePrice")); // возвращает true.
// console.log(Car.prototype.changePrice); //это функция.
// const audiQ336kEURO = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// //вызов метода getPrice() вернет число 36000:
// console.log(audiQ336kEURO);
// console.log(audiQ336kEURO.getPrice());

// //вызов метода changePrice(35000) и последующем вызове getPrice() вернет число 35000.
// audiQ336kEURO.changePrice(35000);
// console.log(audiQ336kEURO.getPrice());

// === TASK 11 Приватные свойства ===
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// // получится объект { model: 'Q3', price: 36000 }.
// console.log(audi);

// const bmw = new Car({ brand: "BMW", model: "X5", price: 58900 });
// //получится объект { model: 'X5', price: 58900 }.
// console.log(bmw);

// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// //получится объект { model: 'Murano', price: 31700 }.
// console.log(nissan);

// // У экземпляра нет публичного свойства brand.
// // console.log(audi.#brand);

// console.log(audi.getBrand());
// // getBrand() возвращает значение приватного свойства brand.

// // Метод changeBrand('Honda') изменяет значение приватного свойства brand на 'Honda'.
// audi.changeBrand("Honda");
// console.log(audi.getBrand());

// === TASK 12 Задача. Хранилище 2.0 ===
// class Storage {
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems());
// // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems());
// // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems());
// // ["Нанитоиды", "Антигравитатор", "Дроид"]

// === TASK 13 Задача. Конструктор строк 2.0 ===
// class StringBuilder {
//   #value;
//   constructor(baseValue) {
//     this.#value = baseValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

// === TASK 14 Геттеры и сеттеры ===
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// === TASK 15 Статические свойства ===

// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// === TASK 16 Статические методы ===
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price, message) {
//     if (price <= Car.#MAX_PRICE) {
//       return `Всё хорошо, цена в порядке. ${message}`;
//     } else {
//       return "Внимание! Цена превышает допустимую.";
//     }
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// // console.log(audi);
// const bmw = new Car({ price: 64000 });
// // console.log(bmw);

// // console.log(Car.checkPrice(audi.price));
// // Всё хорошо, цена в порядке.

// // console.log(Car.checkPrice(bmw.price));
// // Внимание! Цена превышает допустимую.

// console.log(Car.checkPrice(36000, "AUDI"));
// // возвращает строку 'Всё хорошо, цена в порядке.'.

// console.log(Car.checkPrice(18000));
// //возвращает строку 'Всё хорошо, цена в порядке.'.

// // Вызов Car.checkPrice(64000) возвращает строку 'Внимание! Цена превышает допустимую.'.
// // Вызов Car.checkPrice(57000) возвращает строку 'Внимание! Цена превышает допустимую.'.

// === TASK 17 Наследование классов ===
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки

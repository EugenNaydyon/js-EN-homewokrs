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
function StringBuilder(baseValue) {
  this.value = baseValue;
}
StringBuilder.prototype.getValue = function () {
  return this.value;
};

StringBuilder.prototype.padStart = function (str) {
  //console.log(`${str}${this.value}`);
  this.value = `${str}${this.value}`;
  //console.log(this.value);
  //return `${str}${this.value}`;
};
StringBuilder.prototype.padEnd = function (str) {
  //console.log(`${this.value}${str}`);
  //return `${this.value}${str}`;
  this.value = `${this.value}${str}`;
};
StringBuilder.prototype.padBoth = function (str) {
  //console.log(`${str}${this.value}${str}`);
  //return `${str}${this.value}${str}`;
  this.value = `${str}${this.value}${str}`;
};
// Пиши код выше этой строки
const builder = new StringBuilder(".");
//console.log(builder.getValue()); // '.'
builder.padStart("^");
console.log(builder.getValue()); // '^.'
builder.padEnd("^");
console.log(builder.getValue()); // '^.^'
builder.padBoth("=");
console.log(builder.getValue()); // '=^.^='

// === TASK 08 Объявление класса ===
Задание
Используя ключевое слово class объяви класс Car с пустым телом.

Тесты
Объявлен класс Car с пустым телом.
Результат вызова new Car() это пустой объект.

class Car { }

// === TASK 09 Конструктор класса ===

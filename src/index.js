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
function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

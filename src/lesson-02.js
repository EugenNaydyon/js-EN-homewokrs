// console.log("welcome to lesson 02");

// ==== TASK 01 Ранний возврат ====
function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

// =========================================================

// ==== TASK 02 Задача: проверка пароля (ранний возврат) ====
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  //optimisated

  return message;
  // Change code above this line
}

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }

  return "Access denied, wrong password!";
}
// ===============================================================

// ==== TASK 03 Задача: склад товаров 3.0 ====
function checkStorage(available, ordered) {
  // Change code below this line
  let message;

  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  return message;
  // Change code above this line
}

// ======== refactoring
function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  return "The order is accepted, our manager will contact you";
}

// ==== TASK 04 Создание массива ====
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

// ==== TASK 05 Доступ к элементам по индексу ====
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);
// console.table(fruits);

// ==== TASK 06 Переопределение значения элемента ====
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.table(fruits);

// ==== TASK 07 Длина массива ====
// const fruits = ["apple", "peach", "pear", "banana"];

// let fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// ==== TASK 08 Индекс последнего элемента ====
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

// ==== TASK 09 Задача: Крайние элементы массива ====

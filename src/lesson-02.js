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
// function getExtremeElements(array) {
//   console.log("sourceArray:", array);

//   const numbersElementsToDel = array.length - 2;
//   console.log("Number the elements to delete:", numbersElementsToDel);

//   const deletedArrayElements = array.splice(1, array.length - 2);
//   console.log("deletedArrayElements:", deletedArrayElements);
//   console.log("newArray:", array);
//   console.log("=======================================================");
// }

// getExtremeElements([1, 2, 3, 4, 5]); // возвращает [1, 5]
// getExtremeElements(["Earth", "Mars", "Venus"]); //возвращает ["Earth", "Venus"]
// getExtremeElements(["apple", "peach", "pear", "banana"]); // возвращает ["apple", "banana"]

// ==== TASK 10 Метод строк split() ====
// function splitMessage(message, delimeter) {
//   let words;

//   words = message.split(delimeter);
//   console.log(words);

//   return words;
// }

// splitMessage("Mango hurries to the train", " "); //возвращает ["Mango", "hurries", "to", "the", "train"]
// splitMessage("Mango", ""); // возвращает ["M", "a", "n", "g", "o"]
// splitMessage("best_for_week", "_"); // возвращает ["best", "for", "week"]

// ==== TASK 11 Задача: гравировка украшений ====
function calculateEngravingPrice(message, pricePerWord) {
  const numbersOfWords = message.split(" ");
  const totalPrice = numbersOfWords.length * pricePerWord;
  console.log(numbersOfWords);
  console.log(totalPrice);
}

calculateEngravingPrice("JavaScript is in my blood", 10); // возвращает 50
calculateEngravingPrice("JavaScript is in my blood", 20); // возвращает 100
calculateEngravingPrice("Web-development is creative work", 40); // возвращает 160
calculateEngravingPrice("Web-development is creative work", 20); // возвращает 80

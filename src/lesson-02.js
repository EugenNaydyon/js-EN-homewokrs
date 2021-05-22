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
// function calculateEngravingPrice(message, pricePerWord) {
//   const numbersOfWords = message.split(" ");
//   const totalPrice = numbersOfWords.length * pricePerWord;
//   console.log(numbersOfWords);
//   console.log(totalPrice);

//   // return totalPrice;
// }

// calculateEngravingPrice("JavaScript is in my blood", 10); // возвращает 50
// calculateEngravingPrice("JavaScript is in my blood", 20); // возвращает 100
// calculateEngravingPrice("Web-development is creative work", 40); // возвращает 160
// calculateEngravingPrice("Web-development is creative work", 20); // возвращает 80

// ===== TASK 12 Метод массива join() =====
// function makeStringFromArray(array, delimeter) {
//   let string;

//   string = array.join(delimeter);
//   console.log(string);

//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "); // возвращает "Mango hurries to the train"
// makeStringFromArray(["M", "a", "n", "g", "o"], " "); // возвращает "Mango"
// makeStringFromArray(["top", "picks", "for", "you"], "_"); // возвращает "top_picks_for_you"

// ===== TASK 13 Метод массива join() =====
// function slugify(title) {
//   // 1. приводим к нижнему регистру
//   // const titleLowerCase = title.toLowerCase();
//   // console.log(titleLowerCase);
//   // // 2. создаем массив из строки
//   // const titleArray = titleLowerCase.split(" ");
//   // console.log(titleArray);
//   // // 3. создаем строку slug с разделителем
//   // const titleSlug = titleArray.join("-");
//   // console.log(titleSlug);
//   // console.log("================================");
//   const titleModernSlug = title.toLowerCase().split(" ").join("-");
//   console.log(titleModernSlug);
// }

// slugify("Arrays for begginers"); // возвращает "arrays-for-begginers"
// slugify("English for developer"); // возвращает "english-for-developer"
// slugify("Ten secrets of JavaScript"); // возвращает "ten-secrets-of-javascript"
// slugify("How to become a JUNIOR developer in TWO WEEKS"); // возвращает "how-to-become-a-junior-developer-in-two-weeks"

// ===== TASK 14 Метод slice() =====
// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// console.log(fruits);

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);

// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// console.log(nonExtremeEls);

// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// ===== TASK 15 Метод concat() =====
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// ===== TASK 16 Задача: композиция массивов =====
// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray).slice(0, maxLength);

//   console.log(newArray);
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3); // возвращает ["Mango", "Poly", "Ajax"]
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4); // возвращает ["Mango", "Poly", "Houston", "Ajax"]
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3); // возвращает ["Mango", "Ajax", "Chelsea"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2); // возвращает ["Earth", "Jupiter"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4); // возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0); // возвращает []
// // Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив

// ===== TASK 17 Цикл for =====
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// ===== TASK 18 Задача: сумма чисел (цикл for)=====
// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   console.log(sum);
// }
// calculateTotal(1); // возвращает 1
// calculateTotal(3); // возвращает 6
// calculateTotal(7); // возвращает 28
// calculateTotal(18); // возвращает 171
// calculateTotal(24); // возвращает 300

// ===== TASK 19 Итерация по массиву =====
// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ===== TASK 20 Задача: подсчёт суммы покупки =====
// function calculateTotalPrice(order) {
//   let total = 0;
//   // let number = order.length;
//   // console.log(number);

//   for (let i = 0; i < order.length; i += 1) {
//     total = total + order[i];
//     console.log(order[i]);
//   }
//   console.log(total);
//   console.log("================");
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]); //возвращает 138
// calculateTotalPrice([164, 48, 291]); //возвращает 503
// calculateTotalPrice([412, 371, 94, 63, 176]); //возвращает 1116
// // calculateTotalPrice(); // со случайным массивом возвращает правильное значение

// ===== TASK 21 Задача: поиск самого длинного слова =====
// function findLongestWord(string) {
//   let stringArray = string.split(" ");
//   let longestWord = stringArray[0];

//   for (const wordArray of stringArray) {
//     if (wordArray.length > longestWord.length) {
//       longestWord = wordArray;
//     }
//   }
//   console.log(longestWord);
// }

// findLongestWord("The quick brown fox jumped over the lazy dog"); //возвращает jumped
// findLongestWord("Google do a roll"); //возвращает Google
// findLongestWord("May the force be with you"); //возвращает force
// // findLongestWord(); //со случайной строкой возвращает правильное значение

// ===== TASK 22 Метод push() =====
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 3); // возвращает [1, 2, 3]
// createArrayOfNumbers(14, 17); // возвращает [14, 15, 16, 17]
// createArrayOfNumbers(29, 34); // возвращает [29, 30, 31, 32, 33, 34]
// // createArrayOfNumbers(); // со случайными min и max возвращает правильный массив

// ===== TASK 23 Задача: фильтрация массива чисел =====
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);
// }

// filterArray([1, 2, 3, 4, 5], 3); // возвращает [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); // возвращает [5]
// filterArray([1, 2, 3, 4, 5], 5); // возвращает []
// filterArray([12, 24, 8, 41, 76], 38); // возвращает [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); // возвращает [24, 41, 76]
// // filterArray() со случайным массивом и числом возвращает правильный массив

// ===== TASK 24 Метод includes() =====
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   console.log(fruits.includes(fruit));
//   return fruits.includes(fruit); // Change this line
// }
// checkFruit("plum"); // возвращает true
// checkFruit("mandarin"); // возвращает false
// checkFruit("pear"); // возвращает true
// checkFruit("Pear"); // возвращает false
// checkFruit("apple"); // возвращает true

// ===== TASK 25 Задача: общие элементы =====
// function getCommonElements(array1, array2) {
//   const repitedElementsArray = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       repitedElementsArray.push(element);
//     }
//   }
//   console.log(repitedElementsArray);
//   return repitedElementsArray;
// }

// getCommonElements([1, 2, 3], [2, 4]); // возвращает [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]); // возвращает [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // возвращает [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // возвращает [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]); // возвращает []

// ===== TASK 26 Цикл for...of =====
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const element of order) {
//     total += element;
//   }

//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]); // возвращает 138
// calculateTotalPrice([164, 48, 291]); // возвращает 503
// calculateTotalPrice([412, 371, 94, 63, 176]); // возвращает 1116
// calculateTotalPrice([]); // возвращает 0

// ===== TASK 27 Зачада: фильтрация массива чисел 2.0 =====
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   console.log(filteredNumbers);
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3); // возвращает [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); // возвращает [5]
// filterArray([1, 2, 3, 4, 5], 5); // возвращает []
// filterArray([12, 24, 8, 41, 76], 38); // возвращает [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); // возвращает [24, 41, 76]

// ===== TASK 28 Оператор % =====

// const a = 3 % 1;
// console.log(a);

// const b = 4 % 3;
// console.log(b);

// const c = 11 % 8;
// console.log(c);

// const d = 12 % 7;
// console.log(d);

// const e = 8 % 3;
// console.log(e);

// Объявлена переменная a
// Значение переменной a это число 0
// Объявлена переменная b
// Значение переменной b это число 1
// Объявлена переменная c
// Значение переменной c это число 3
// Объявлена переменная d
// Значение переменной d это число 5
// Объявлена переменная e
// Значение переменной e это число 2

// ===== TASK 29 Задача: чётные числа =====
// function getEvenNumbers(start, end) {
//   let evenNumbersArray = [];

//   for (let i = start; i <= end; i += 1) {
//     console.log(i);
//     if (i % 2 === 0) {
//       evenNumbersArray.push(i);
//     }
//   }
//   console.log(evenNumbersArray);
//   console.log("====================");
// }
// getEvenNumbers(2, 5); // возвращает [2, 4]
// getEvenNumbers(3, 11); // возвращает [4, 6, 8, 10]
// getEvenNumbers(6, 12); // возвращает [6, 8, 10, 12]
// getEvenNumbers(8, 8); // возвращает [8]
// getEvenNumbers(7, 7); // возвращает []

// ===== TASK 30 Оператор break =====
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);
// -------------------------------------------------
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

// ===== TASK 31 Оператор break vs return в функции =====
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       // number = i;
//       // break;
//       console.log(i);
//       return i;
//     }
//   }

//   // return number;
//   // Change code above this line
// }

// findNumber(2, 6, 5); // возвращает 5
// findNumber(8, 17, 3); // возвращает 9
// findNumber(6, 9, 4); // возвращает 8
// findNumber(16, 35, 7); // возвращает 21

// ===== TASK 32 Задача: функция includes() =====
// function includes(array, value) {
//   for (let element of array) {
//     if (element === value) {
//       console.log("true");
//       return "true";
//     }
//   }
//   console.log("false");
//   return "false";
// }

// includes([1, 2, 3, 4, 5], 3); // возвращает true
// includes([1, 2, 3, 4, 5], 17); // возвращает false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"); // возвращает true
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"); // возвращает false
// includes(["apple", "plum", "pear", "orange"], "plum"); // возвращает true
// includes(["apple", "plum", "pear", "orange"], "kiwi"); // возвращает false

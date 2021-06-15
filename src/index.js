//====== TASK 01 Метод forEach(callback) ======
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }

  // Пиши код выше этой строки
  return totalPrice;
}

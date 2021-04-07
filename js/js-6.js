// ************Задача 1 - 6
// Метод forEach(callback)
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach((item) => (totalPrice += item));
//   // Пиши код выше этой строки
//   return totalPrice;
// }
// console.log(calculateTotalPrice([5,6,15,48]))


// ************Задача 2 - 6
// Задача. Фильтрация массива чисел
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки
//   numbers.forEach(number=>{
//     if (number>value) {
//       filteredNumbers.push(number);
//     }
//   }
// )
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }
// console.log(filterArray([1,5,10,6,2,8], 4));



// ************Задача 3 - 6
// Задача. Общие элементы
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки
//   firstArray.forEach (arg=>{
//     if (secondArray.includes(arg)) {
//       commonElements.push(arg);
//     }
//   })  
//   return commonElements;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1,5,10,6,2,8],[1,6,20,2,15,7]));


// ************Задача 4 - 6
// Стрелочные функции.
// const calculateTotalPrice=(quantity, pricePerItem)=> {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(6,80));


// ************Задача 5 - 6
// Неявный возврат
// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => 
// quantity * pricePerItem;
// // Пиши код выше этой строки
// console.log(calculateTotalPrice(5,80));


// ************Задача 6 - 6
// Стрелочные функции как коллбеки
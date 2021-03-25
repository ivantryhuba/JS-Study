// ************Задача 21 - 2
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const arrStr = string.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];
//       return longestWord;
//     }
//   }
// };

// *****************************************
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const arrStr = string.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {

//     if (arrStr[i].length > wordLength) {
//       wordLength = arrStr[i].length;
//       longestWord = arrStr[i];
  
//     }
//   }
//       return longestWord;
// };

// ************Задача 25 - 2
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   let arrayVal = [];
  
// for (let i=0; i<array1; i+=1){
// if (array1.includes(array2)){
// 	arrayVal.push(value);
// 	}
// }
//   return arrayVal;
  
//   // Пиши код выше этой строки
// } 

// ************Задача 26 - 2
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const value of order) {
//     total += value;
//   }

//   // Пиши код выше этой строки
//   return total;
// }

// ************Задача 27 - 2
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// ************Задача 28 - 2
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// ************Задача 29 - 2
// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
// const isEven = [];
// for (let i = start; i <= end; i++){
// if (i%2===0)
// {isEven.push(i);
// }
// }
// return isEven;
//   // Пиши код выше этой строки
// }

// ************Задача 30 - 2
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ************Задача 31 - 2
// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }

//   return number;
//   // Пиши код выше этой строки
// }

// ************Задача 32 - 2
// function includes(array, value) {
//   // Пиши код ниже этой строки
//   for (const element of array){
//   if(element===value){
//   return true;}
//   }

//   return false;
//   // Пиши код выше этой строки
// }
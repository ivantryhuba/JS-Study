// ************Задача 18 - 3 
// (Задача. Поиск объекта по значению свойства)
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   let prodPrice=0;
//   for(const product of products){
//   if(product.name===productName){
//   prodPrice=product.price;
//   return prodPrice;}}
//   return null;  
//   // Пиши код выше этой строки
// }

// ************Задача 19 - 3 
// Коллекция значений свойства
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
// const propValue =[];
// for (const product of products){
// if(product[propName]){
// propValue.push(product[propName])}
// }
// return propValue
//   // Пиши код выше этой строки
// }

// ************Задача 20 - 3 
// Общая стоимость товара
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let totalPrice =0;
//   for (const product of products){
//   if(product.name===productName){
//   totalPrice = product.price * product.quantity;}
//   }
//   return totalPrice;
//   // Пиши код выше этой строки
// }


// ************Задача 21 - 3 
// Деструктуризация объектов
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {
//   yesterday, 
//   today, 
//   tomorrow, 
// } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// ************Задача 22 - 3 
// Значения по умолчанию
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {
//   yesterday, 
//   today, 
//   tomorrow, 
//   icon='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// } = highTemperatures;
// // Пиши код выше этой строки
//const meanTemperature = (yesterday + today + tomorrow) / 3;


// ************Задача 23 - 3 
// Изменение имени переменной
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {yesterday:highYesterday,
// today:highToday,
// tomorrow:highTomorrow,
// icon:highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//       }=highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// ************Задача 24 - 3 
// Деструктуризация в циклах
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const {hex, rgb,} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// ************Задача 25 - 3 
// Глубокая деструктуризация
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {
//   today:{
//   	low:lowToday, 
//   	high:highToday, 
//   	icon:todayIcon=
//     'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow:{
//   	low:lowTomorrow,
//     high:highTomorrow,
//  	icon:tomorrowIcon =
//     'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// ************Задача 26 - 3 
// Паттерн «Объект настроек»
// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {
//     today:{
//       low:todayLow, 
//       high:todayHigh, 
//     },
//     tomorrow:{
//       low:tomorrowLow,
//       high:tomorrowHigh,
//     },
//   } = forecast;
//     // Пиши код выше этой строки
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }


// ************Задача 27 - 3 
// Операция spread при передаче аргументов
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


// ************Задача 28 - 3 
// Операция spread при создании нового массива
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// ************Задача 29 - 3 
// Операция spread при создании нового объекта
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings,};

// ************Задача 30 - 3 
// Задача. Карточки задач
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
// const second = {category, priority, ...data, completed,};
//   return second;
//   // Пиши код выше этой строки
// }


// ************Задача 31 - 3 
// Операция rest для сбора всех аргументов функции
// // Пиши код ниже этой строки
// function add(...args) {
//   let argsSum = 0;
//   for(const arg of args ){
//   argsSum+=arg;}
//   return argsSum;
//   // Пиши код выше этой строки
// }



// ************Задача 32 - 3 
// Операция rest для сбора части аргументов функции
// Пиши код ниже этой строки
// function addOverNum(value, ...args) {
//   let total = 0;
//   for (let i =0; i <= args.length; i+=1) {
//     if(value < args[i])
//     {
//     total += args[i]}
//   }
//   return total;
//   // Пиши код выше этой строки
// }


// ************Задача 33 - 3 
// Задача. Массив совпадений
// // Пиши код ниже этой строки
// function findMatches(arrayArgs, ...args) {
//   const matches = []; // Не изменяй эту строку
//   for (const arg of args){
// if(arrayArgs.includes(arg)){
// matches.push(arg)}} 
//   // Пиши код выше этой строки
//   return matches;
// }


// ************Задача 34 - 3 
// Методы объекта
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },  
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//     updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };


// ************Задача 35 - 3 
// Доступ к свойствам объекта в его методах
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
// 	const indexBook = this.books.indexOf(oldName);
//     const newBook  = this.books.splice(indexBook, 1, newName);  	
//     // Пиши код выше этой строки
//   },
// };


// ************Задача 36 - 3 
// Задача. Лавка зелий «У старой жабы»
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],
//   // Пиши код выше этой строки
// };


// ************Задача 37 - 3 
// Задача. Получаем все зелья
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  
//   getPotions() {
//   const potionList = this.potions;
//     return potionList; 
//   },
//   // Пиши код выше этой строки
// };


// ************Задача 38 - 3 
// Задача. Добавляем новое зелье
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };


// ************Задача 39 - 3 
// Задача. Удаляем зелье
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
// const removeIndex = this.potions.indexOf(potionName);
//     this.potions.splice(removeIndex, 1);    
//     // Пиши код выше этой строки
//   },
// };


// ************Задача 40 - 3 
// Задача. Обновляем зелье
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//  const indexUpdate = this.potions.indexOf(oldName);
// this.potions.splice(indexUpdate, 1, newName); 
//     // Пиши код выше этой строки
//   },
// };


// ************Задача 41 - 3 
// Задача. Расширяем инвентарь
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     for(let i = 0; i<potions.length; i+=1 ){
//       const { name } = potions[i];
//     if (potionName === name) {
//       potions.splice(i, 1);    
//     }
//   }
// },
//     updatePotionName(oldName, newName) {
//     for(const potion of this.potions){
//       if (oldName === potion.name) {
//       potion.name = newName; 
//       }
//     }
//   }
// };

// console.log ('Список зелий');
// console.table (atTheOldToad.getPotions());

// console.log ('Добавляем зелье');
// console.log (atTheOldToad.addPotion({name:'Виагра', price: 100 }));

// console.log ('Список зелий');
// console.table (atTheOldToad.getPotions())

// // console.log ('Удаляем зелье');
// // console.log (atTheOldToad.removePotion('Виагра'));

// // console.log ('Список зелий');
// // console.table (atTheOldToad.getPotions());

// console.log ('Меняем зелье');
// console.log (atTheOldToad.updatePotionName('Виагра', 'Хер дубовый'));

// console.log ('Список зелий');
// console.table (atTheOldToad.getPotions());

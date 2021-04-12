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
// Пиши код ниже этой строки
// const calculateTotalPrice= (orderedItems)=> {
//   let totalPrice = 0;
//   orderedItems.forEach(item=> {
//     totalPrice += item;
//   });
//   return totalPrice;
// }
// // Пиши код выше этой строки
// console.log(calculateTotalPrice([5,6,15,48]))

// ************Задача 7 - 6
// Задача. Фильтрация массива чисел 2.0
// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// };
// console.log(filterArray([1,5,10,6,2,8], 4));

// ************Задача 8 - 6
// Задача. Общие элементы 2.0
// Пиши код ниже этой строки
// const getCommonElements=(firstArray, secondArray)=> {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Пиши код выше этой строки
//   return commonElements;
// }
// console.log(getCommonElements([1,5,10,6,2,8],[1,6,20,2,15,7]));

// ************Задача 9 - 6
// Чистые функции
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
// const newNumbers = [];
//   numbers.forEach ((number)=> {
//     number % 2 === 0
//     ?
//       newNumbers.push(number + value)
//     :
//     newNumbers.push(number)
//   });
// return newNumbers;
//   // Пиши код выше этой строки
// }
// console.log(changeEven([1,5,10,6,2,8], 3))

// ************Задача 10 - 6
// Метод map()
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet)=>planet.length);
// console.log(planetsLengths);

// ************Задача 11 - 6
// Метод map() и массив объектов
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки
// const titles = books.map(book=>book.title);
// console.log(titles);

// ************Задача 12 - 6
// Метод flatMap()
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика']
//   }
// ];
// // Пиши код ниже этой строки
// const genres = books.flatMap((book)=>book.genres);
// console.log(genres);

//  ************Задача 13 - 6
// Задача. Имена пользователей
// const getUserNames = (users) => (userNames = users.map((user) => user.name));

//  ************Задача 14 - 6
// Задача. Почты пользователей
// // Пиши код ниже этой строки
// const getUserEmails =(users) => (userEmails = users.map((user) => user.email));
//   // Пиши код выше этой строки

//  ************Задача 15 - 6
// Методы filter и find
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки
// const evenNumbers = numbers.filter(number=>number%2===0);
// const oddNumbers = numbers.filter(number=>number%2!==0);
// console.log(evenNumbers);
// console.log(oddNumbers);

//  ************Задача 16 - 6
// Фильтрация уникальных элементов
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика", "мистика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика", "приключения"],
//   },
// ];
// Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );
// console.log(allGenres);
// console.log(uniqueGenres);

//  ************Задача 17 - 6
// Метод filter() и массив объектов
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Бернард Корнуэлл";
// // Пиши код ниже этой строки
// const topRatedBooks = books.filter((book) => book.rating > MIN_RATING);
// const booksByAuthor = books.filter(
//   (book) => book.author === "Бернард Корнуэлл"
// );
// console.log(topRatedBooks);
// console.log(booksByAuthor);

//  ************Задача 18 - 6
// Задача. Пользователи с цветом глаз
// const users=[
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ];
// const color = 'brown';

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
// const usersFilter=[];
// const colorFilter = users.filter(user=>{
// if(user.eyeColor===color){
//   usersFilter.push(user);
// }
// });
// return usersFilter;
// };
//   // Пиши код выше этой строки
//   console.log(getUsersWithEyeColor(users, color));

// ************Задача 19 - 6
// Задача. Пользователи в возрастной категории
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ];
// Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const usersFilter=[];
//  const ageFilter = users.filter(user=>{
//  if(user.age>minAge && user.age<maxAge){
//    usersFilter.push(user);
//  }
//  });
//  return usersFilter;
//  };
// // Пиши код выше этой строки
// console.log(getUsersWithAge(users, 24, 40));

// ************Задача 20 - 6
// Задача. Пользователи с другом
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ];

// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   const usersFilter = [];
//   const friendFilter = users.filter(user=>{
//     if(user.friends.includes(friendName)){
//        usersFilter.push(user);}
//   });
//   return usersFilter;
// };
// // Пиши код выше этой строки
// console.log(getUsersWithFriend(users,  'Briana Decker'))

// ************Задача 21 - 6
// Задача. Список друзей
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ]
// // Пиши код ниже этой строки
// const getFriends = (users) => {
//   const allFriends = users.flatMap((user)=>user.friends);
//  const uniqueFriends = allFriends.filter((friend, index, array)=> array.indexOf(friend)===index);
//  return uniqueFriends;
// };
// // Пиши код выше этой строки
// console.log(getFriends(users));

// ************Задача 22 - 6
// Задача. Активные пользователи
// Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//   const activeUsers = users.filter(user=>user.isActive)
//   return activeUsers;
// };
// Пиши код выше этой строки
// console.log(getActiveUsers(users));

// ************Задача 23 - 6
// Задача. Неактивные пользователи
// Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//   const inactiveUsers = users.filter(user=>!user.isActive)
//  return inactiveUsers;
// };
// Пиши код выше этой строки
// console.log(getInactiveUsers(users));

// ************Задача 24 - 6
// Метод find()
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
// ];
// const BOOK_TITLE = "Сон смешного человека";
// const AUTHOR = "Роберт Шекли";
// // Пиши код ниже этой строки
// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

// ************Задача 25 - 6
// Задача. Пользователь с почтой
// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//   return users.find(user=>user.email===email)
//   };
//   // Пиши код выше этой строки

// ************Задача 26 - 6
// Метод every()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки
// const eachElementInFirstIsEven = firstArray.every(value=>value%2===0);
// const eachElementInFirstIsOdd = firstArray.every(value=>value%2!==0);

// const eachElementInSecondIsEven =secondArray.every(value=>value%2===0);
// const eachElementInSecondIsOdd = secondArray.every(value=>value%2!==0);

// const eachElementInThirdIsEven = thirdArray.every(value=>value%2===0);
// const eachElementInThirdIsOdd = thirdArray.every(value=>value%2!==0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// ************Задача 27 - 6
// Задача. Все ли пользователи активны
// Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//   return users.every(user=>user.isActive)
//   };
//   // Пиши код выше этой строки
// console.log(isEveryUserActive(users));

// ************Задача 28 - 6
// Метод some()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки
// const anyElementInFirstIsEven = firstArray.some(value=>value%2===0);
// const anyElementInFirstIsOdd = firstArray.some(value=>value%2!==0);

// const anyElementInSecondIsEven =secondArray.some(value=>value%2===0);
// const anyElementInSecondIsOdd = secondArray.some(value=>value%2!==0);

// const anyElementInThirdIsEven = thirdArray.some(value=>value%2===0);
// const anyElementInThirdIsOdd = thirdArray.some(value=>value%2!==0);
// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

// ************Задача 29 - 6
// Задача. Есть ли активные пользователи
// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   return users.some(user=>user.isActive);
// };
// // Пиши код выше этой строки

// ************Задача 30 - 6
// Метод reduce()
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки
// const totalPlayTime = playtimes.reduce((acc, value) => acc + value, 0);
// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// ************Задача 31 - 6
// Метод reduce() и массив объектов
// const players = [
//   { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//   { name: "Поли", playtime: 469, gamesPlayed: 2 },
//   { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//   { name: "Киви", playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки
// const totalAveragePlaytimePerGame = players.reduce(
//   (total, { playtime, gamesPlayed }) => total + playtime / gamesPlayed,
//   0
// );
// console.log(totalAveragePlaytimePerGame);

// ************Задача 32 - 6
// Задача. Общий баланс пользователей
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// // Пиши код ниже этой строки
// const calculateTotalBalance = (users) =>
//   users.reduce((total, user) => total + user.balance, 0);
// // Пиши код выше этой строки
// console.log(calculateTotalBalance(users));

// ************Задача 33 - 6
// Задача. Общее количество друзей
// Пиши код ниже этой строки
// const getTotalFriendCount = (users) =>
//   users.reduce((total, user) => total + user.friends.length, 0);
// // Пиши код выше этой строк
// console.log(getTotalFriendCount(users));

// ************Задача 34 - 6
// Метод sort()
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// ************Задача 35 - 6
// Свой порядок сортировки чисел
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// ************Задача 36 - 6
// Свой порядок сортировки строк
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
//   'Говард Лавкрафт'
// ];
// // Пиши код ниже этой строки
// const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// ************Задача 37 - 6
// Сортировка объектов
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки
// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );
// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );
// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// ************Задача 38 - 6
// Задача. Сортировка по балансу (По ВОЗРАСТАНИЮ)
// // Пиши код ниже этой строки
// const sortByAscendingBalance = (users) =>
// [...users].sort(
//   (firstUser, secondUser) => firstUser.balance - secondUser.balance
// );
// // Пиши код выше этой строки
// console.log(sortByAscendingBalance(users));

// ************Задача 39 - 6
// Задача. Сортировка по количеству друзей (По УБЫВАНИЮ)
// Пиши код ниже этой строки
// const sortByDescendingFriendCount = (users) =>
//   [...users].sort(
//     (firstUser, secondUser) =>
//       secondUser.friends.length - firstUser.friends.length
//   );
// Пиши код выше этой строки
// console.log(sortByDescendingFriendCount(users));

// ************Задача 40 - 6
// Задача. Сортировка по имени (в алфавитном порядке.)
// Пиши код ниже этой строки
// const sortByName = (users) =>
//   [...users].sort((firstUser, secondUser) =>
//     firstUser.name.localeCompare(secondUser.name)
//   );
// Пиши код выше этой строки
// console.log(sortByName(users));

// ************Задача 41 - 6
// Цепочки методов (чейнинг, chaining)
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
//   { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки
// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));
// console.log(names);

// ************Задача 42 - 6
// Задача. Пользователи и друзья
// Пиши код ниже этой строки
// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);
// // Пиши код выше этой строки
// console.log(getNamesSortedByFriendCount(users));

// ************Задача 43 - 6
// Задача. Имена друзей
// Пиши код ниже этой строки
// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
// // Пиши код выше этой строки
// console.log(getSortedFriends(users));

// ************Задача 44 - 6
// Задача. Общий баланс
// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
// // Пиши код выше этой строки
// console.log(getTotalBalanceByGender(users));
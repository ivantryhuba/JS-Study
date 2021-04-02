// ************Задача 1 - 5
// Прототип объекта и метод Object.create()
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.isPrototypeOf(child))

// ************Задача 2 - 5
// Задача. Цепочка прототипов
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.surname)
// console.log(ancestor.isPrototypeOf(parent));
// console.log(parent.isPrototypeOf(child));
// console.log(parent.hasOwnProperty('heritage'));

// ************Задача 3 - 5
// Функция-конструктор
// function Car (brand, model, price){
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   }

//   const bmw = new Car('BMW', 'X5M', '100000');
//   console.log(bmw);

// ************Задача 4 - 5
// Объект настроек
// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const bmw = new Car({brand: 'BMW',model: 'X5M',price: '100000'});
// console.log(bmw);

// ************Задача 5 - 5
// Свойство prototype
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.getPrice = function(){
// 	return this.price;
// };

// Car.prototype.changePrice = function(newPrice){
//   this.price=newPrice;
// }

// const bmw = new Car({brand: 'BMW',model: 'X5M',price: '100000'});
// console.log(bmw);
// console.log(bmw.getPrice());
// bmw.changePrice(55000);
// console.log(bmw.getPrice());

// ************Задача 6 - 5
// Задача. Хранилище
// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const { items } = this;
//   if (items.includes(item)) {
//     items.splice(items.indexOf(item), 1);
//   }
// };

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ************Задача 7 - 5
// Конструктор строк
// function StringBuilder(baseValue){
//  this.value = baseValue;
// };

// StringBuilder.prototype.getValue = function(){
// return this.value;
// };

// StringBuilder.prototype.padStart = function(str){
// this.value=str+this.value;
// };

// StringBuilder.prototype.padEnd = function(str){
//   this.value=this.value+str;
// };

// StringBuilder.prototype.padBoth = function(str){
//   this.value=str+this.value+str;
//   };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// ************Задача 8 - 5
// Объявление класса
// class Car{};

// ************Задача 9 - 5
// Конструктор класса
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(audi);

// ************Задача 10 - 5
// Методы класса
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   };

// getPrice(){
// return this.price;
// };

//   changePrice(newPrice){
//   this.price=newPrice;
//   };
// };

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(audi);
// console.log(audi.getPrice());
// audi.changePrice(40000);
// console.log(audi.getPrice());

// ************Задача 11 - 5
// Приватные свойства
// class Car {
//   #brand;
// constructor({ brand, model, price }) {
//   this.#brand = brand;
//   this.model = model;
//   this.price = price;
// }

//   getBrand(){
//   return this.#brand;
//   };

//   changeBrand(newBrand){
//   this.#brand=newBrand;
//   };
// }

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(audi);
// console.log(audi.getBrand());
// audi.changeBrand('Tesla');
// console.log(audi.getBrand());

// ************Задача 12 - 5
// Задача. Хранилище 2.0
// class Storage {
//   #items;

//   constructor(items) {
//       this.#items = items;
//   }

// getItems() {
//   return this.#items;
// };

// addItem(newItem) {
//   this.#items.push(newItem);
// };

// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };

// };
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ************Задача 13 - 5
// Задача. Конструктор строк 2.0
// class StringBuilder {
//   #value

//   constructor(baseValue){
//   this.#value = baseValue;
// }

// getValue() {
//   return this.#value;
// };

// padEnd(str) {
//   this.#value += str;
// };

// padStart(str) {
//   this.#value = str + this.#value;
// };

// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// ************Задача 14 - 5
// Геттеры и сеттеры
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

// set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// ************Задача 15 - 5
// Статические свойства
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice > Car.MAX_PRICE){
//     return;
//     }
//     this.#price = newPrice;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000

// ************Задача 16 - 5
// Статические методы
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки

//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Внимание! Цена превышает допустимую.";
//     }
//     return "Всё хорошо, цена в порядке.";
//   }

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// ************Задача 17 - 5
// Наследование классов
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки

// class Admin extends User {
//   static AccessLevel = { 
//    BASIC: 'basic', 
//    SUPERUSER: 'superuser' 
//   }
// }

// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);


// ************Задача 18 - 5
// Конструктор дочернего класса
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
// 	accessLevel;
  
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   constructor({email, accessLevel}) {
//     super(email);

//   }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser


// ************Задача 19 - 5
// Методы дочернего класса
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;
//    blacklistedEmails;

//   constructor({ email, accessLevel,  blacklistedEmails}) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails=[];
//   }

//   blacklist(email){
//   this.blacklistedEmails.push(email);
//   };
  
//   isBlacklisted(email){
//   if(this.blacklistedEmails.includes(email)){
//   return true;}
//   return false;
//   };
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 
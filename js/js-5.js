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
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
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
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
function Car({brand, model, price}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}


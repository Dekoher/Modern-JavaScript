const html = `
/**
 ************************************** Arrays *************************************
 */
const numbers = [1,2,3,4,5,5,6,7,7];

const months = new Array('Jan', 'Feb', 'Mar', 'Apr');

// add an element into a specific position in the array
months[4] = 'May';
// add an element at the end of the array
months.push('Jun');
// add an element at the beginning of the array
months.unshift('Month 0');
// delete the last element of the array
months.pop();
// delete the first element of the array
months.shift();
// delete element(s), starting in the first parameter and ending in the second parameter
months.splice(2,1);
// order the array values inversed
months.reverse();
// console.log(months);

let arr1 = [1,2,3],
    arr2 = [5,6,7];

// console.log(arr1.concat(arr2));

const fruits = ['orange', 'apple', 'melon'];
// order the values of an array which is not of number
fruits.sort();
// console.log(fruits);

arr1 = [3,9,91,100,15,23,65,12,65,79,1];
// order an array of numbers in ascending mode
arr1.sort((a, b) => a - b);
// order an array of numbers in desscending mode
arr1.sort((a, b) => b - a);
// console.log(arr1);

/**
 ************************************** Objects *************************************
 */

 const person = {
   name: 'Juan',
   lastname: 'xd',
   profession: 'Developer',
   email: 'juan@juan.com',
   age: 28,
   music: ['Trance', 'Techno', 'Psytrance'],
   home: {
     city: 'cdmx',
     country: 'Mexico'
   },
   birthday: function() {
     // with the 'this' word we can use any property which is inside the object
     return new Date().getFullYear() - this.age;
   }
 }

// console.log(person.birthday());

const cars = [
  {
    model: 2020,
    name: 'audi a7',
    motor: 2.0
  },
  {
    model: 2020,
    name: 'seat leon',
    motor: 2.0
  }
]

for (let i = 0; i < cars.length; i++) {
  // console.log(cars[i].name);
}

cars[0].model = 2021;
console.log(cars);

/**
 ************************************* Functions *************************************
 */

function sum(a, b) {
  console.log(a + b);
}
sum(1, 2);
sum(10, 20);

function sum2(a, b) {
  return a + b;
}
// sum2(2,4);
// sum2(10,23);

// console.log(sum2(2, 4));
// console.log(sum2(12, 40));

/**
 * Function declaration
 */
function sayHi(name) {
  return \`hi \${name}\`;
}
// The function here shows hi undefined because the parameter is not passed,
// for that reason the default parameter values are used
console.log(sayHi());

function sayHello(name = "visitor") {
  return \`hi \${name}\`;
}
// If the parameter is not passed the function returns the default value
console.log(sayHello());
console.log(sayHello("Pedro"));

/**
 * Function expression
 */

const oterSum = function (a = 3, b = 4) {
  return a + b;
};
console.log(oterSum(2, 4));
console.log(oterSum(2));
console.log(oterSum());

/**
 * IIFE Functions
 */

(function () {
  console.log("CREATING AN IIFE");
})();

(function (technology) {
  console.log(\`Learning \${technology}\`);
})("Python");

// IIFE with arrow function
((technology) => console.log(\`Learning \${technology}\`))("JavaScript");

/**
 * Properties Methods
 * When a function is made inside of an object
 */

const music = {
  play: function (id) {
    console.log(\`Playing song \${id}\`);
  },
  pause: function () {
    console.log("Music paused");
  },
};
// Methods can also be created out of the object
music.delete = function (id) {
  console.log(\`Song #\${id} was deleted\`);
};
music.play(30);
music.pause();
music.delete(5);

// En JS si una función no existe y se manda a llamar el codigo va a mandar un error y ahi se detiene la ejecucion del programa
//algo();
// si existe funcion
getClients();
// En este momento se detiene la ejecucion del programa ya que algo() no existe y manda un error
//algo();

function getClients() {
  console.log('Downloading...');
  setTimeout(function() {
    console.log('Completed!');
  }, 3000);
}

/**
 ************************************* Try - Catch *************************************
 */


try {
  getClients();
} catch (error) {
  console.log(error);
} finally {
  console.log('no le importa, ejecuta de todos modos');
}

/**
 ************************************* Dates *************************************
 */
// get a specific date
let christmas2017 = new Date('12/25/2017');
// console.log(christmas2017);

const today = new Date();
// month 0,1,2,3,4,5,6,7,8,9,10,11
today.getMonth();
// day 
today.getDate();
today.getDay();
// year
today.getFullYear();
// minutes
today.getMinutes();
// hours
today.getHours();
// Milliseconds since 1970
today.getTime();
// Modifying a value
today.getFullYear();
today.setFullYear(2019);
today.getFullYear();

console.log(today);

/**
 ************************************* Control Structures *************************************
 */

// IF
const age = 18;
if (age === 18) {
  console.log('you can drink beer');
} else {
  console.log('You can not drink beer');
}

let points;

if (typeof points !== 'undefined') {
  console.log(\`Your score is: \${points}\`);
} else {
  console.log(\`There is no points\`);
}

let cash = 500;
let totalAmount = 800;
if (cash > totalAmount) {
  console.log('PAyment Successful!!');
} else {
  console.log('Payment failed!');
}

// If-Else condition and logic operator (and => &&)
let hour = 90;
if (hour > 0 && hour <= 11) {
  console.log('Good Morning!');
} else if(hour > 11 && hour <= 18) {
  console.log('Good Afternoon');
} else if(hour > 18 && hour <= 24) {
  console.log('Good Evening');
} else {
  console.log('Invalid Hour!!');
}

// IF-Ese condition and logic operator (or => ||)
let cash = 300,
    credit = 300,
    available = cash + credit,
    totalAmount = 500;

if (totalAmount < cash || totalAmount < credit || totalAmount < available) {
  console.log('You can pay');
} else {
  console.log('You can not pay');
}

// Ternary operator
const logged = true;

console.log( logged === true ? 'Login Success!' : 'Login Failed!');

//   SWITCH
const paymentMethod = 'bitcoin';
switch(paymentMethod) {
  case 'cash':
    console.log(\`User payed with \${paymentMethod}\`);
    break;
  case 'check':
    console.log(\`User payed with \${paymentMethod}\`);
    break;
  default: 
    console.log(\`Payment method not supported!\`);
    break;
}

// For Loops
for (let i = 0; i < 10; i++) {
  console.log(\`numero: \${i}\`);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(\`I'm at: \${i}\`);
  }
  console.log(\`numero: \${i}\`);
}
// Output => 
// numero: 0
// numero: 1 
// numero: 2 
// numero: 3 
// numero: 4 
// I'm at: 5 
// numero: 5 
// numero: 6 
// numero: 7 
// numero: 8 
// numero: 9

// if you want to delete the number 5 or the loop continue write continue word next to the console.log

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log(\`I'm at: \${i}\`);
    continue;
  }
  console.log(\`numero: \${i}\`);
}
// Output =>
// numero: 1 
// numero: 2 
// numero: 3 
// numero: 4 
// I'm at: 5  
// numero: 6 
// numero: 7 
// numero: 8 
// numero: 9

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(\`The number \${i} is even\`);
  } else {
    console.log(\`The number \${i} is odd\`);
  }  
}

const products = ['shirt', 'guitar', 'tennis'];

for (let i = 0; i < products.length; i++) {
  console.log(\`Your product \${products[i]} was added\`);
}

/**
 * ================= While Loop ================= //
 */

let i = 0;

while (i<10) {
  // console.log(\`Number: \${i}\`);
  if (i === 5) {
    console.log(\`Number: five\`);
    i++;
    // continue;
    // break;
  }
  console.log(\`Number: \${i}\`);
  i++;
}

const music = ['song1', 'song2', 'song3'];

let i = 0;

while (i < music.length) {
  console.log(\`Playing \${music[i]}\`);
  i++;
}

let i = 10;

do {
  console.log(\`Number: \${i}\`);
  i++;
} while(i < 10);

/**
 * ================= forEach ================= //
 */

 const tasks = ['code', 'eat', 'code', 'project', 'learn-js'];

 for (let i = 0; i < tasks.length; i++) {
   console.log(tasks[i]);
 }

tasks.forEach(function(task, index) {
  console.log(index, ': ', task);
});

const shopCart = [
  {id: 1, product: 'book'},
  {id: 2, product: 'shirt'},
  {id: 3, product: 'guitar'},
  {id: 4, product: 'headphones'},
  {id: 5, product: 'laptop'}
];

const productName = shopCart.map(function(shopCart) {
  return shopCart.product;
});

console.log(productName);

const car = {
  model: 2021,
  brand: 'Seat',
  motor: 'v2',
}

for (const piece in car) {
  console.log(\`\${typeof piece} --- \${car[piece]}\`);
}

// console.log(car);


// ================= Iterators for Arrays, Set and Maps ================= //
const cities = ['New York', 'Madrid', 'Paris', 'London'];
const orders = new Set([123,321,345,341]);
const data = new Map();

data.set('name', 'Pepe');
data.set('profession', 'web developer');

// console.log(cities);
// console.log(orders);
// console.log(data);

// =================Entries() Iterator ================= //
// cities entries
for (const entry of cities.entries()) {
  console.log(entry);
  //prints the value with its key which is in this case the position of each value
  // Array [ 0, "New York" ]
  // Array [ 1, "Madrid" ]
  // Array [ 2, "Paris" ]
  // Array [ 3, "London" ]
}
// orders entries
for (const entry of orders.entries()) {
  console.log(entry);
  // a new Set has the same values of the keys for that it prints the same number
  // Array [ 123, 123 ]
  // Array [ 321, 321 ]
  // Array [ 345, 345 ]
  // Array [ 341, 341 ]
}
// data entries
for (const entry of data.entries()) {
  console.log(entry);
  // print the properties with its value which was set with the data.set()
  // Array [ "name", "Pepe" ]
  // Array [ "profession", "web developer" ]
}

// =================Values() Iterator ================= //
// cities values
for (const value of cities.values()) {
  console.log(value);
  //prints the values of the cities array
  // New York
  // Madrid
  // Paris
  // London
}
// orders values
for (const value of orders.values()) {
  console.log(value);
  // print the values of orders
  // 123
  // 321
  // 345
  // 341
}
// data values
for (const value of data.values()) {
  console.log(value);
  // print the values of data
  // Pepe
  // web developer
}

// =================Keys() Iterator ================= //
// cities keys
for (const key of cities.keys()) {
  console.log(key);
  //prints the keys of the cities array
  // 0
  // 1
  // 2
  // 3
}
// orders keys
for (const key of orders.keys()) {
  console.log(key);
  // print the keys of orders
  // 123
  // 321
  // 345
  // 341
}
// data keys
for (const key of data.keys()) {
  console.log(key);
  // print the keys of data
  // name
  // profession
}

// =================default Iterator ================= //
// cities defaults
for (const defolt of cities) {
  console.log(defolt);
  //prints the defaults of the cities array
  // New York
  // Madrid
  // Paris
  // London
}
// orders defaults
for (const defolt of orders) {
  console.log(defolt);
  // print the defaults of orders
  // 123
  // 321
  // 345
  // 341
}
// data defaults
for (const defolt of data) {
  console.log(defolt);
  // print the defaults of data
  // Array [ "name", "Pepe" ]
  // Array [ "profession", "web developer" ]
}

// ================= string Iterators ================= //

const message = 'Learning-JavaScript';
// Old version
for (let i = 0; i < message.length; i++) {
  // console.log(message[i]);
}
// New version
for (const letter of message) {
  // console.log(letter);
}

const aElements = document.getElementsByTagName('a');
for (const link of aElements) {
  // console.log(link);
  // console.log(link.href);
}

// ================= Scope ================= //
// var puede ser modificado en el scope de bloque es por eso qeu no suele utilizarse ya
// mientras que let y const mantienen su valor limitado en el scope que esten siendo utilizadas
var a = 'a';
let b = 'b';
const c = 'c';

// Scope de la Funcion
scope();
function scope() {
  var a = 'A';
  let b = 'B';
  const c = 'C';
  console.log('LOCALES FUNCION: ' + a,b,c);
}

// Scope de Bloque {}

if (true) {
  var a = 'AA';
  let b = 'BB';
  const c = 'CC';
  console.log('BLOQUE: ' + a,b,c);
}

console.log('GLOBALES: ' + a,b,c);

`;



document.querySelector("#code").innerHTML = html;

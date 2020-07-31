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

`;


/**
 *      While Loop
 */

let i = 0;

while (i<0) {
  console.log(`Number: ${i}`);
  i++;
}




document.querySelector("#code").innerHTML = html;

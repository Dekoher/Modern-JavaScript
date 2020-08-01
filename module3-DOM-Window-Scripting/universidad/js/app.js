// Eliminar de Local Storage
// localStorage.clear();

/**
 *  getElementByID
 */

// let element;

// element = document.getElementById('encabezado');
// element.style.background = '#eaeaea';
// element.style.color = '#000';
// element.style.padding = '20px';

// // element.textContent = 'The best courses';
// element.innerText = 'The best courses';

// console.log(element.innerText);

/**
 * QuerySelector (para obtener un solo elemento)
 */

//  const header = document.querySelector('#encabezado');

//   header.style.background = '#eaeaea';
//   header.style.color = '#000';
//   header.style.padding = '20px';
//   header.textContent = 'The best courses';
//   console.log(header);

// let link;
// // obtiene el primer elemento 'a' que tiene la clase principal
// link = document.querySelector('#principal a:first-child');
// // obtiene el elemento 'a' que tiene la clase principal y que esta en la posicion (3)
// link = document.querySelector('#principal a:nth-child(3)');
// // obtiene el ultimo elemento 'a' que tiene la clase principal
// link = document.querySelector('#principal a:last-child');

// console.log(link);

/**
 *  Obtener varios elementos del DOM
 */

// const links = document.getElementsByTagName('a');
// // to convert the links constant to an array
// let arrayLinks = Array.from(links);
// // console.log(arrayLinks);

// arrayLinks.forEach(function(link) {
//   console.log(link.textContent);
// });

/**
 * QuerySelectorAll (para obtener mas de un elemento del DOM)
 */
// Obtiene todos los elementos a(nth-child(even) ==> pares) con id #principal
// const links = document.querySelectorAll('#principal a:nth-child(even)');

// links.forEach(function(link) {
//   link.style.background = 'blue';
//   link.style.color = '#fff'
// });
// console.log(links);

/***
 * Traversing
 */

// Traversing del pader a los hijos
// const navigation = document.querySelector("#principal");

// //  console.log(navigation.childNodes);
// //  console.log(navigation.children);
// console.log(navigation.children[0].nodeName);

// console.log((navigation.children[0].textContent = "Cambie el texto"));

// const bar = document.querySelector(".barra");

// console.log(bar.children[0].children[0].children);

// Traversing de los hijos al padre

// const links = document.querySelectorAll('.enlace');

// console.log(links[0].parentNode);
// console.log(links[0].parentElement); //mas recomendado

// const links = document.querySelectorAll('.enlace');

// console.log(links[0].parentElement.parentElement.parentElement)

// const coursesCards = document.querySelectorAll('.card');

// console.log(coursesCards[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola desde Traversing');

// Traversing entre los nodos hermanos

// const links = document.querySelectorAll('.enlace');

// // console.log(links[4].previousElementSibling);
// console.log(links[0].nextElementSibling.nextElementSibling.parentElement.children[4]);

/**
 * Crear Elementos del DOM con JAvaScript
 */

const link = document.createElement("a");
// agregar clase
link.className = "enlace";
// agregar id
link.id = "new-id";
// agregar atributo
link.setAttribute("href", "#");
// agregar texto
link.textContent = "NEW LINK ADDED";
// link.appendChild(document.createTextNode('Other New link'));
link.style.background = 'blue';
link.style.color = '#fff';
// Agregarlo al HTML
document.querySelector('#secundaria').appendChild(link);

// console.log(link);

/**
 * Reemplazar elementos en el DOM con javascript
 */

const secondHeader = document.createElement('h2');
secondHeader.id = 'header';

secondHeader.appendChild(document.createTextNode('New Header'));

const beforeHeader = document.querySelector('#encabezado');

const fatherElement = document.querySelector('#lista-cursos');

fatherElement.replaceChild(secondHeader, beforeHeader);

// console.log(secondHeader);

/**
 * Eliminar elementos del DOM con javascript
 */

// const links = document.querySelectorAll('.enlace');
// const nav = document.querySelector('#principal');

// links[8].remove();

// nav.removeChild(links[0]);

// console.log(links);

const firstLi = document.querySelector('.enlace');

let elem;

elem = firstLi.className;
// elem = firstLi.classList;
elem = firstLi.classList.add('new-class');
elem = firstLi.classList.remove('enlace');
elem = firstLi.classList;

elem = firstLi.getAttribute('href');
firstLi.setAttribute('href', 'http://google.com');
firstLi.setAttribute('data-id', 20);
elem = firstLi.hasAttribute('href');
firstLi.removeAttribute('data-id');
elem = firstLi;
console.log(elem);

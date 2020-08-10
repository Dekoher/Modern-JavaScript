/**
 * ====================== Mouse Events ======================
 */

// MOUSE CLICK EVENT 
// document.querySelector('#submit-buscador').addEventListener('click', playButton);

// function playButton(event) {
//   event.preventDefault();
//   let element;
//   element = event;
//   element = event.target;
//   element = event.target.id;
//   element = event.target.className;
//   element = event.target.innerText;

//   console.log(element);
// }

// document.querySelector('#encabezado').addEventListener('click', function(e) {
//   e.target.innerText = 'New header';
//   // console.log(e);
// });

// 

// const header = document.querySelector('#encabezado');
// const links = document.querySelectorAll('.enlace');
// const button = document.querySelector('#vaciar-carrito');

// CLick
// button.addEventListener('click', getEvent);
// Double Click
// button.addEventListener('dblclick', getEvent);
// MOuse enter
// button.addEventListener('mouseenter', getEvent);
// Mouse leave
// button.addEventListener('mouseleave', getEvent);
// MOuse over
// button.addEventListener('mouseover', getEvent);
// Mouse out (similar a mouse leave)
// button.addEventListener('mouseout', getEvent);
// Mouse Down (is executed when detect a click pressed)
// button.addEventListener('mousedown', getEvent);
// Mouse Up (is executed when click stops pressing)
// button.addEventListener('mouseup', getEvent);

// header.addEventListener('mousemove', getEvent);

// const search = document.querySelector('#buscador');
// // search.addEventListener('keydown', getEvent);
// // search.addEventListener('keyup', getEvent);
// // search.addEventListener('keypress', getEvent);
// // search.addEventListener('focus', getEvent);
// // search.addEventListener('blur', getEvent);
// // search.addEventListener('cut', getEvent);
// // search.addEventListener('copy', getEvent);
// // search.addEventListener('paste', getEvent);
// // search.addEventListener('input', getEvent);
// // search.addEventListener('change', getEvent);

// function getEvent(e) {
//   // console.log(search.value);
//   // document.querySelector('#encabezado').innerText = search.value;
//   console.log('eventType=>', e.type);
// }

/**
 * ====================== Event Bubbling ======================
 */

// const card = document.querySelector('.card');
// const infoCourse = document.querySelector('.info-card');
// const addCart = document.querySelector('.agregar-carrito');

// card.addEventListener('click', function(e) {
//   e.stopPropagation();
//   console.log('card click');
// });
// infoCourse.addEventListener('click', function(e) {
//   e.stopPropagation();
//   console.log('infoCourse click');
// });
// addCart.addEventListener('click', function(e) {
//   e.stopPropagation();
//   console.log('addCart click');
// });

// ====================== Delegation ======================
// obtener un evento en un elemento en especifico al compararlo con algun atributo que contega ya sea una
// clase un id etc y no tendremos que ponerle un evento click a cada elemento sino identificar el seleccionado.
// document.body.addEventListener('click', deleteElement);

// function deleteElement(e) {
//   e.preventDefault();
//   console.log('Click!');
//   console.log(e.target.classList);
//   if (e.target.classList.contains('borrar-curso')) {
//     console.log(e.target.parentElement.parentElement.remove());
//   }
// }

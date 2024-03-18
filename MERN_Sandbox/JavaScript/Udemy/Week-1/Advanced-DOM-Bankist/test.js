//Selecting, Creating, and Deleting Elements

// Whole document
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Multiple Classes
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); // returns node list

/** NodeList(4)
 * [section#section--1.section,
 *  section#section--2.section,
 *  section#section--3.section,
 *  section.section.section--sign-up]
 */

// ID
console.log(document.getElementById('section--1'));

// Tag Element
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // return HTMLCollection

/**
 * HTMLCollection(9)
 * [button.btn--text.btn--scroll-to,
 * button.btn.operations__tab.operations__tab--1.operations__tab--active,
 * button.btn.operations__tab.operations__tab--2,
 * button.btn.operations__tab.operations__tab--3,
 * button.slider__btn.slider__btn--left,
 * button.slider__btn.slider__btn--right,
 * button.btn.btn--show-modal,
 * button.btn--close-modal,
 * button.btn]
 */

console.log(document.getElementsByClassName('btn')); // retrun HTML Collection

// Creating and Inserting Elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
//header.append(message.cloneNode(true)); // didn't work while remove

header.append(message);

// Delete Element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    console.log('hello');
    //message.remove();
    message.parentElement.removeChild(message);
  });

// property will apply to inline
message.style.backgroundColor = '#37383d';
message.style.width = '105%';

// get css property from css file
console.log(getComputedStyle(message).height);

message.style.padding = '5px';

// message.style.height =
// Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// Update custom property
//document.documentElement.style.setProperty('--color-primary', 'white');

// Attributes
/**<img
          src="img/logo.png"
          alt="Bankist logo"
          class="nav__logo"
          id="logo"
          data-version="2.0"
        /> */

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
console.log(logo.getAttribute('src'));

// data attribute
console.log(logo.dataset.version);

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('you are reading heading!');
};

//h1.addEventListener('mouseenter', alertH1);

// 2nd way
// h1.onmouseenter = function (e) {
//   alert('onmouseenter : you are reading heading ES6!');
// };

// Remove Event Listener
//h1.removeEventListener('mouseenter', alertH1);

/****************** select parent child elements  *****************/

// Select Child elements
console.log(document.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
// {
//     "0": {span.highlight},
//     "1": {br},
//     "2": {span.highlight}
// }

h1.firstElementChild.style.color = 'yellow';
h1.lastElementChild.style.color = 'pink';

// Select Parent elements
console.log(h1.parentNode); // div.header__title
console.log(h1.parentElement); // div.header__title

// Closest
h1.closest('.header').style.background = 'red';

/**
 * <div class="header__title">
 *
 *    <h1></h1>
 *    <h4></h4>
 *    <button></button>
 *    <img/>
 *
 * </div>
 *
 */

const h1 = document.querySelector('h1');

console.log(h1.previousElementSibling); // null : no siblings are there before h1
console.log(h1.nextElementSibling); // h4
console.log(h1.parentElement.children);
// HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]

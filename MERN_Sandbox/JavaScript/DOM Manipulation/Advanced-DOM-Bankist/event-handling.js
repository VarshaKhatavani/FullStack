const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min + 1) + min);

console.log(randomInt(0, 255));

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('parent', e.target, e.currentTarget);
  },
  true
);

document.querySelector('.nav__links').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('2nd child', e.target, e.currentTarget);
    //e.stopPropagation();
  },
  true
);

// on click of navigation it got affected to parent as well
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('3rd child', e.target, e.currentTarget);
});

// event bubbling : event fire from child --> to parent
// event capturing : to specify capturing phase have to add true to listener
// parent --> 2nd child --> 3rd child
// event delegation : means setting event listeners on ancestor elements allows you to handle events efficiently.

// event.target : refers to the DOM element that triggers an event
// event.currentTarget : main element of triggered element

// e.preventDefault() : can be used to prevent the default behavior of a form submission, a link click, or a button click.
// e.stopPropagation() : can be used to prevent an event from bubbling up to any ancestor elements.

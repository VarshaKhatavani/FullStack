'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// Page Navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  //console.log(e);
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

/**
 *  <div class="operations__tab-container">
          <button
            class="btn operations__tab operations__tab--1 operations__tab--active"
            data-tab="1"
          >
            <span>01</span>Instant Transfers
          </button>
          <button class="btn operations__tab operations__tab--2" data-tab="2">
            <span>02</span>Instant Loans
          </button>
          <button class="btn operations__tab operations__tab--3" data-tab="3">
            <span>03</span>Instant Closing
          </button>
        </div>
 */

//  Dynamic tab
const tabButtons = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

//tabButtons.forEach(t => t.addEventListener('click', () => console.log('TAB')));

tabContainer.addEventListener('click', function (e) {
  // const clicked = e.target.; // didn't work
  // const clicked = e.target.parentElement; // didn't work

  // find the closest element that matches operations__tab
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  let clickedId = clicked.dataset.tab;

  if (!clicked) return;

  //remove active button/ content class from buttons
  tabButtons.forEach(t => t.classList.remove('operations__tab--active'));
  tabContent.forEach(tc => tc.classList.remove('operations__content--active'));

  // add class to clicked button
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clickedId}`)
    .classList.add('operations__content--active');
});

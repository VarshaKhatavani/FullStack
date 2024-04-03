'use strict';

/////////////////////////////////////////////////
// BANKIST APP
import { accounts } from './Bankist-data.js';

console.log(accounts);

const account1 = accounts[0];

//console.log(account1);

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// const user = 'Steven Thomas Williams';

// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(function (name) {
//     return name[0];
//   })
//   .join('');

// console.log(username); // stw

// sample username
const createUsernames = function (user) {
  return user
    .toLowerCase()
    .split(' ')
    .map(function (name) {
      return name[0];
    })
    .join('');
};
console.log(createUsernames('Steven Thomas Williams'));

// add username key to account object
const createAccountUsernames = function (accts) {
  accts.forEach(function (acc) {
    // add key
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};

createAccountUsernames(accounts);
console.log(accounts);
//console.log(createAccountUsernames(accounts)); it will return undefined

/**
 *  {
    "owner": "Jonas Schmedtmann",
    "movements": [
        200,
        450,
        -400,
        3000,
        -650,
        -130,
        70,
        1300
    ],
    "interestRate": 1.2,
    "pin": 1111,
    "username": "js"
}
 * 
 */

// Display overall balance
let balance;
const calcDisplayBalance = function (accts) {
  accts.balance = accts.movements.reduce((acc, bal) => {
    return acc + bal;
  }, 0);
  labelBalance.textContent = `${accts.balance} EUR`;
};

let eurToUsd = 1.1;

const totalDepositUSD = account1.movements
  .filter(mov => mov < 0)
  .map((mov, i) => {
    return Math.abs(mov * eurToUsd);
  });
console.log(totalDepositUSD);
// [-400, -650, -130]

// using chaining - display balance summary
const calDisplaySummary = function (currAcc) {
  const incomes = currAcc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = currAcc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = currAcc.movements
    .filter(mov => mov > 0)
    //calculate interest
    .map((deposit, mov) => {
      return (deposit * currAcc.interestRate) / 100;
    })
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

//Implement Login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    containerApp.style.opacity = 100;
    updateUI(currentAccount);
  }
});

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display total balance
  calcDisplayBalance(acc);

  // Display Summary
  calDisplaySummary(acc);
};

// Transfer Amount to another account
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  let amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(receiverAcc, amount);
  console.table(currentAccount);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('Transfer Valid');
    currentAccount.movements.push(-amount); // auto updated total balance
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
    inputTransferAmount.value = inputTransferTo.value = '';
  }
});

// Close Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  let inputPin = Number(inputClosePin.value);
  if (
    inputCloseUsername &&
    inputCloseUsername.value === currentAccount.username &&
    currentAccount.pin === inputPin
  ) {
    console.log('correct');
    const accIndex = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(accIndex);

    // Delete account
    accounts.splice(accIndex, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

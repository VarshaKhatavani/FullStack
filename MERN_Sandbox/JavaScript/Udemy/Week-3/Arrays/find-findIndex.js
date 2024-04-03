import { accounts } from './Bankist-data.js';

console.log(accounts);

// use of find
const firstWithdrawal = accounts[0].movements.find(mov => mov < 0);
console.log(firstWithdrawal);

// find record from object
const acc = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(acc);

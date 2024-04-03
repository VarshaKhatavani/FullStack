import { accounts } from './Bankist-data.js';

console.log(accounts);

// use of find
const firstWithdrawal = accounts[0].movements.find(mov => mov < 0);
console.log(firstWithdrawal);

// find record from object
const acc = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(acc); // {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}

// find record from object
const accInd = accounts.findIndex(acc => acc.owner === 'Jessica Davis');
console.log(accInd); // 1

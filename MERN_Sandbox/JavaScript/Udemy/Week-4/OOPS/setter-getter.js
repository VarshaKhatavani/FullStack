const account = {
  owner: 'Varsha',
  movements: [190, 112, 450, 787, 235],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 16_15_976;
console.log(account.movements);

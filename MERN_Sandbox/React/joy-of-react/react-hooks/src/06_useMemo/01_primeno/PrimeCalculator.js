export const getAllPrimes = (selectedNum) => {
  const allPrimes = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }

  console.log(allPrimes);

  return allPrimes;
};

function isPrime(n) {
  const max = Math.ceil(Math.sqrt(n));
  if (n === 2) {
    return true;
  }
  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }
  return true;
}

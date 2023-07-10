
console.log('task1');

setTimeout(() => console.log('task2'), 0);

console.log('task3');


function message() {
    return 'Good Morning';
}
setTimeout(function timeout() {
  console.log('Click the button!');
}, 5000);
message();
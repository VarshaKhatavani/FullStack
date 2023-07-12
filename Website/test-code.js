
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

// map 

let arr = [1,2,3,4,5];

// converted to square function
//let squareArr = arr.map(function(ele){
//    return ele*ele;
//});

function square(ele){
  return ele*ele;
}

let squareArr = arr.map(square); // here arr is present before map

console.log(squareArr);

// commented function used in the pollyfill map below 
// function myMap(arr, cbfunc){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//       newArr.push(cbfunc(arr[i])); // passed array value arr[i] to calculate square 
//     }
//     return newArr;
// }

//console.log(myMap(arr,square));

// Now want to put myMap function in prototype of map 
// i.e, arr.map(func); // bcz it's already there in the prototype
//      myMap(arr,square) // we can call like this so to put into the prototype,
//      have to create polyfill of map

// pollyfillMap

// def :   Poly means many, and fill means filling the gap. 
//         It means filling the gap of features in the browser with many techniques 
//         if the browser doesn’t support the default features of JavaScript.

Array.prototype.myMap = function(cbfunc){
      let newArr = [];
      for(let i=0;i<this.length;i++){
        newArr.push(cbfunc(this[i])); // passed array value arr[i] to calculate square 
      }
      return newArr;
}

let squareArrOfPollyfillMap = arr.myMap(square);

console.log(squareArrOfPollyfillMap);

// polyfillFilter

function filter(arr, callback) {
  // Write your solution here ===========
  let newArr = [] ;
  for(let i=0;i<arr.length;i++){
      let ele = callback(arr[i]);
      if(callback(ele)){
          newArr.push(ele);
      }
  }
  return newArr ;
}


function reduce(arr, reducer) {
  // Write your solution here ========================
  let ans = arr[0];
  for(let i=1;i<arr.length;i++){
      ans = reducer(ans,arr[i]);        
  }
  return ans ;
}

// 


function createCounter(n) {
  //write your code here ===============================================
  var cnt = 0;
  return function () {
      cnt++;
      return n + cnt - 1 ;
  };
}

let answer =  createCounter(5); 
console.log(answer);








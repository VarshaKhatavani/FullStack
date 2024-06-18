/**
 1. How does GC work in JS?
 Ans : "Mark-and-Sweep" algorithm is used for garbadge collection.
       This algorithm will start from the "Global" object. 
       It marks the referenced values & unreachable locations are cleared.  

 2. Explain Mark-and-Sweep algorithms pattern
 Ans : The algorithm begins with a root element & then it starts marking the referenced 
       values & unmarked values will be cleared.

 3. Which situation can create a memory leak?
 Ans : A memory leak in JavaScript occurs when memory that is no longer needed is not released,
       leading to a gradual increase in memory usage over time.

 1. Global Variables

 function createGlobalVariable() {
    myGlobalVar = "This is a global variable";  // `myGlobalVar` becomes global
}

 2. Forgotten Timers or Callbacks

 function startTimer() {
    setInterval(() => {
        // Some recurring task
    }, 1000);
}
startTimer();  // If not cleared, this timer will keep running

 3. Closures

 function createClosure() {
    let largeArray = new Array(1000000).fill("data");
    return function() {
        console.log(largeArray.length);
    };
}
let closure = createClosure();
// Even if we don't use `closure`, `largeArray` is kept in memory

 4. Detached DOM Elements     

let element = document.getElementById("myElement");
document.body.removeChild(element);  // Element is removed from the DOM
// But `element` still holds a reference, preventing garbage collection

 5. Circular References

 function createCircularReference() {
    let obj1 = {};
    let obj2 = {};
    obj1.ref = obj2;
    obj2.ref = obj1;
}
createCircularReference();  // obj1 and obj2 reference each other
 
6. Event Listeners

let button = document.getElementById("myButton");
function onClick() {
    console.log("Button clicked");
}
button.addEventListener("click", onClick);
// If button is removed from the DOM, onClick still holds a reference

// ** Preventing Memory Leaks **
To prevent memory leaks, follow these best practices:

1. Use local variables: Avoid unnecessary global variables.
2. Clear timers and intervals: Use clearInterval and clearTimeout to remove timers.
3. Remove event listeners: Use removeEventListener to deregister event listeners.
4. Avoid unnecessary closures: Be cautious with closures that capture large variables.
5. Manage DOM references: Ensure that references to DOM elements are removed when the elements are no longer in the document.
6. Break circular references: Use weak references where appropriate to avoid circular dependencies.

 */

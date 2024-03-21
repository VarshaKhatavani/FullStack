// Functional scope : is the scope created with a function declaration. 
// Variables declared in a functional scope are only available in that scope 
// and cannot be accessed outside of it.

// Global Scope

// Functional Scope
function createVariables(){
    var apple = '🍎';
    let cherry = "🍒";
    const strawberry = "🍓";
}

console.log(apple); // ReferenceError
console.log(cherry); // ReferenceError
console.log(strawberry); // ReferenceError



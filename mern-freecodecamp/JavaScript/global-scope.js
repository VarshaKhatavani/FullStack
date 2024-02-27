// scope : means current context of execution in which values and expressions 
//         are visible or can be referenced.

// Global Scope
// Global Scope is the main scope that covers all the scopes in a script.
// Variables declared in the global scope are available in all scopes.

const grapes = "🍇";

// Function Scope
function logGrapes(){
    console.log(grapes); // 🍇
    // Block Scope
    {
        console.log(grapes); // 🍇
    }
}

// Block Scope
{
  console.log(grapes); // 🍇
}

logGrapes();
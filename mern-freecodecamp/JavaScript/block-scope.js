// Block scope is the scope that is created with a pair of curly braces. Block scope is only valid for let and const, not var. 

// Block Scope
 {
    const banana =  "🍌"; 
    {
        console.log(banana);  // 🍌
        var carrot = "🥕";
        let lemon = "🍋";
    }
     console.log(carrot); // 🥕
     console.log(lemon); // Uncaught ReferenceError: lemon is not defined     
 }

 //console.log(banana); // ReferenceError: banana is not defined

<h1>What is Scope?</h1>

Scope in JavaScript refers to environment in which variables are declared and can be accessed.

It dictates the visibility and lifetime of a variable, determining where in your code a particular variable is valid and accessible.

<h1>Global Scope</h1>

In JavaScript, global scope is the widest scope available. Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code.

You can think of global scope as the "public square" of your program, where everyone can see and access what's going on.

<h1>Local Scope</h1>

Local scope in JavaScript is like a private room within a building – it's an enclosed space where variables are only accessible from within that specific room.

When you declare a variable in local scope, it is limited in visibility to the block of code, function, or conditional statement in which it is defined.

<h1>The Concept of Variable Shadowing</h1>

Variable shadowing occurs when you declare a variable with the same name inside a local scope, effectively "hiding" the variable with the same name in a higher scope.

<h1>Block Scope</h1>

Variables declared in block scope are only accessible within the block in which they are defined.

These variables are like hidden treasures inside each nesting doll, known and accessible only within their respective compartments.

<h1> Differences between Block Scope and Local Scope</h1>

Block scope is often confused with local scope, but there's a key distinction.

In local scope, variables are typically defined within a function,
while block scope is created within code blocks like if, for, or while statements.

Local scope is function-level, meaning it encompasses the entire function, while block scope is limited to the specific block where the variable is declared.

<h1>Scope Chain</h1>

When you reference a variable, JavaScript searches for it starting from the top sheet (the current local or block scope) and moves down through the sheets, looking in each scope until it finds the variable.

This process of searching for variables through multiple scopes is known as the "scope chain."

<h1>Understanding Lexical Scope</h1>

The scope chain in JavaScript follows a principle known as lexical (or static) scoping.

Lexical scoping means that the scope of a function is determined by where the function is declared, not where it's called.

<h1>Closures and Function Scope</h1>

Closures are a fascinating and powerful concept in JavaScript that involves the interplay of <b>function scope</b> and the <b>scope chain</b>.

In JavaScript, a closure is formed when a function is declared within another function, and the inner function has access to the variables of the outer function.

Essence of a closure: The inner function remembers the scope in which it was created and can access its variables even when the outer function has finished executing.

<h2>Practical Examples of Closures</h2>

<li> Data Encapsulation </li>
<li> Event Handlers </li>
<li> Module Pattern </li><br/>

Closures are a fundamental concept that enables advanced JavaScript programming techniques and is essential for understanding topics like callbacks, promises, and asynchronous programming.

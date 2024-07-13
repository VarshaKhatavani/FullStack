# React.useId() Hook

## Example : Login Form

<h3>This hook is utilized in both the header and footer components to dynamically assign unique IDs using React.useId().</h3>

![alt text](image-2.png)

![alt text](image-1.png)

## Example : Using React.useId()

![alt text](image.png)

## Example : SearchApp

#### Package Install : npm i react-feather

#### Icons : https://feathericons.com/

![alt text](image-3.png)

## Example : LoginForm

`Usage Tip:` Place hooks at the top of the component declaration, not within conditional statements.

![alt text](image-4.png)

![alt text](image-5.png)

# React.useRef() Hook

The React.useRef() hook stores the current properties of the selected element.

## use of window.stateValues

`window.stateValues` refers to a global variable in JavaScript that can store and access state-related data across different parts of an application. It allows for centralized state management and can be particularly useful in applications where state needs to be shared and accessed globally.

![alt text](image-6.png)

## Example : Canvas App

![alt text](image-7.png)

## Example : Video Player

<video controls src="src/02_useRef-hook/03_videoplayer/VideoPlayer_Initial.mp4"></video>

<video controls src="src/02_useRef-hook/03_videoplayer/VideoPlayer_After_Speed.mp4"></video>

## Example : Media Player

![alt text](image-8.png)

# React.useEffect() Hook

`React.useEffect()` is a hook in React that allows you to perform side effects in function components. It is used to manage effects like data fetching, subscriptions, or manually changing the DOM from within React components. This hook runs after every render of the component by default, and you can optionally specify cleanup for effects returned by the hook.

It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in function components.

## Example : Counter App

<p>This example demonstrates how to use the useEffect hook in React to update the document title dynamically based on the current count value.</p>

![alt text](image-10.png)

## Example : Sign Up Form

<p>Use of useEffect in Form Handling</p>

![alt text](image-9.png)

## Example : Toggle Dark Mode / Store Value to Local Storage

<p>This example demonstrates using a callback function inside the useState hook to toggle dark mode and store the mode value in local storage.</p>

![alt text](image-11.png)

## Example : Input Focus on mount

<p>Set focus on an input element when the page loads.</p>

![alt text](image-12.png)

## Example : Track the Mouse Pointer on Mouse Move

Demonstrates using the `useState` hook with an object `{ x, y }` to track the position of the mouse pointer as it moves.

![alt text](image-13.png)

## Example : Window Resize

### Set Window Dimensions According to Window Size

Utilizes the `useState` hook with an object `{ width, height }` to dynamically update and track the dimensions of the window as it is resized.

![alt text](image-14.png)

## Example : Intersection Observer

### Slide Left Animation on Intersection

Demonstrates sliding a character left when a specified division intersects using the `Intersection Observer API`.

<video controls src="src/03_useEffect-cleanup-hook/SlideCharacter_InterSectionObserver.mp4"></video>

# Use of return in useEffect: Clean Up Activity

## Example : Enable/Disable Mouse Tracking based on button click

This example illustrates how to use the clean-up function in `useEffect` to enable or disable mouse tracking based on a button click event.

![alt text](image-15.png)

## Example : Clock Interval - Removing Interval with useEffect's return

This example demonstrates how to manage a clock interval and properly clean it up using the `return` function in `useEffect`.

![alt text](image-16.png)

## Example : Automatically Turn On Checkbox if Unchecked

Automatically checks the checkbox after a timeout of 500 ms if it's currently unchecked.

![alt text](image-17.png)

## Example : Media Player (Spacebar)

### Enhanced Functionality: Space Bar and Button Click Interaction

Implements a callback function within a state variable to enhance functionality, allowing interaction through both space bar presses and button clicks.

## Example : Timer (setInterval / setTimeout)

Update the counter value

![alt text](image-18.png)

# Custom Hooks

## Example : Toggle Clock

![alt text](image-19.png)

## Example : Mouse Position

Handling Mouse Pointer Movements with Custom Hooks

![alt text](image-20.png)

## Example: Observing Box Division Availability

Using Intersection Observer and Custom Hooks </h3>

![alt text](image-21.png)

# Stale While Revalidate (SWR) Library and Async Await

## Example : Use of Async Await and Display Message Based on Status

Demonstrates the usage of async await with the SWR library to fetch data and display messages based on the fetch status.

#### installed package : `npm i swr`

![alt text](image-22.png)

## Example : Fetch Temprature using SWR Library

Demonstrates fetching temperature data using the SWR library.

![alt text](image-24.png)

## Example : Search Book

![alt text](image-23.png)

## Example : Display Spinner while Loading Usernames

Illustrates how to use the SWR library to fetch user details and display a spinner while the data is loading.

![alt text](image-25.png)

# Memoization Using useMemo() Hook

## Example : Rows & Columns

Demonstrates how to improve performance by memoizing the computation of rows and columns based on mouse pointer movements using the useMemo() hook.

![alt text](image-26.png)

## Example : Shopping Cart

Addresses and optimizes re-rendering issues of components when updating the ZIP code in a shopping cart application.

![alt text](image-27.png)

## Example : ToggleClock

Optimizing the Toggle Clock function with React Function Reference

**Files Involved:**

_React concept :_ Reference a function in another component
_ClockToggle.js :_ Calls the Function
_ClockApp.js :_ References a function from use-toggle.js
_use-toggle.js :_ Defines a function

![alt text](image-28.png)

## Example : Prime Numbers

Demonstrates how to calculate and display prime numbers from a list of inputed numbers.

![alt text](image-29.png)

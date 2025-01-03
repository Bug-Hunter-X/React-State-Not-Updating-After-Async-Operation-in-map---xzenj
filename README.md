# React Async Map Bug
This repository demonstrates a common bug in React involving asynchronous operations within the `map()` function and how to resolve it using `Promise.all`.

## The Bug
The `bug.js` file contains code that attempts to double an array of numbers and log the results after a delay. However, due to the asynchronous nature of `setTimeout`, the state update is not reflected correctly.

## The Solution
The `bugSolution.js` file shows the corrected approach using `Promise.all` to ensure all asynchronous operations complete before updating the state.
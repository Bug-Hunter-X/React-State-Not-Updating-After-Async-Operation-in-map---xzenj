```javascript
// Incorrect usage of arrow functions within map
const items = [1,2,3,4,5];
const doubledItems = items.map(item => {
  const doubled = item * 2;
  setTimeout(() => {
    console.log(doubled); // This will output correctly
  }, 1000);
});

//The above code may seem correct but the result is not what is expected. 
//The map function will return an array that contains the setTimeout functions, not the doubled values. 
//The console logs will print the doubled values, but not in the context of the map function.
```
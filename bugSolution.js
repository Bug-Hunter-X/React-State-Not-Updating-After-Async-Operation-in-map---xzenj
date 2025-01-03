```javascript
// Correct usage of async/await and Promise.all
const items = [1, 2, 3, 4, 5];

async function doubleItemsAsync(items) {
  const doubledPromises = items.map(item => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(item * 2);
      }, 1000);
    });
  });

  const doubledItems = await Promise.all(doubledPromises);
  console.log(doubledItems); // Correctly logs doubled values
  return doubledItems; // Return the doubled items
}

doubleItemsAsync(items).then(result => {
  // update the state here
  console.log('updated state', result)
}); 
```
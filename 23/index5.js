const items = [5, 10, 5, 3, 2, 10, 2, 10, 6, 2, 9];

const result = items.reduce((acc, item) => {
  const index = acc.findIndex((el) => el > item);
  if (acc.includes(item)) {
    return acc;
  }
  return ((index > -1) ? acc.splice(index, 0, item) : acc.push(item)), acc;
}, []);

console.log(result);
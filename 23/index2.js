const obj = {
  a: "",
  b: "",
  operator: ""
}

function calculate(a, b, operation) {
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return  a / b;
  }
  return 0;
}

const result = calculate.apply(null, [2, 3, "+"]);

console.log(result);

class Calculator {
  add(a, b) {
    return a + b;
  }
    multiply(a, b) {
    return a * b;
    }
    divide(a, b) {  
    return a / b;
    }
}

module.exports = Calculator;
// module.exports = new Calculator(); // This will export an instance of the Calculator class
// module.exports.add = (a, b) => a + b;
// module.exports.multiply = (a, b) => a * b;
// module.exports.divide = (a, b) => a / b;
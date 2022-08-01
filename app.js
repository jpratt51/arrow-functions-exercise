function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

// Refactor the above code to use two arrow functions. Turn it into a one-liner.

const double = arr => arr.map(val => val * 2)

//Replace ALL functions with arrow functions:

function squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);
var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  // Feel free to move things around!
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
// console.log(funkyFunction)
// console.log(funkyFunction())
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = typeof(funkyFunction().toString)

// console.log(theFunk())
console.log(theFunk)
//
// console.log(theFunk)
// console.log(funkyFunction(function(){}))

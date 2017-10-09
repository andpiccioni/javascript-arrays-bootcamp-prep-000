var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]

[element, ...chocolateBars]

function addElementToBeginningOfArray(array, element){
  [element, ...array]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
}

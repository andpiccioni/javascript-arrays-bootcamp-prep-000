var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]

var chocolateBars = addElementToBeginningOfArray(chocolateBars, element){
  [element, ...chocolateBars]
}
function addElementToBeginningOfArray(array, element){
  [element, ...chocolateBars]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
}

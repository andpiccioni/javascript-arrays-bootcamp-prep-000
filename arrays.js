var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
  [element, ...chocolateBars]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
}

function destructivelyAddElementToEndOfArray(array, element){
  array = [element, ...chocolateBars]
}
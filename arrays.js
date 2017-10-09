var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]


function addElementToBeginningOfArray(array, foo){
  [foo, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("element")
  return array
}

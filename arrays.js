var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]


function addElementToBeginningOfArray(array, foo){
  var arraymod = ["foo", ...array]
  return arraymod
}

function destructivelyAddElementToBeginningOfArray(array, foo){
  array.unshift("foo")
  return array
}

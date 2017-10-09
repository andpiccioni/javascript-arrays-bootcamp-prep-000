var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]


function addElementToBeginningOfArray(array, foo){
  var arraymod = ["foo", ...array]
  return arraymod

}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("element")
  return array
}

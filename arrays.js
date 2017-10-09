function addElementToBeginningOfArray(array, item){
  [...array, item]
}

function destructivelyAddElementToEndOfArray(array, item){
  array.push(item)
}

var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]
function accessElementInArray(array, index){
  array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, item){
  chocolateBars.shift(item)
  return chocolateBars
}

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

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
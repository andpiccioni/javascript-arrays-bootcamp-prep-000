function addElementToBeginningOfArray(array, element){
  [...array, element]
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
  array.slice()
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

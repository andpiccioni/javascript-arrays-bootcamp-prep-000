var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]


function addElementToBeginningOfArray(array, foo){
  var arraymod = ["foo", ...array]
  return arraymod
}

function destructivelyAddElementToBeginningOfArray(array, foo){
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, foo){
  var arraymod = [...array, "foo"]
  return arraymod
}

function destructivelyAddElementToEndOfArray(array, foo){
  array.push("foo")
  return array
}

function accessElementInArray(array, index){
  array["index"]
}

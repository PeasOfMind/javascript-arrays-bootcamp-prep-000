var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

<<<<<<< HEAD
function addElementToBeginningOfArray(anArr, elem){
=======
function addElementToBeginningofArray(anArr, elem){
>>>>>>> 27359489fb0f076d1dead181eb4db6724325649f
  let newArr = [elem, ...anArr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(anArr, elem){
<<<<<<< HEAD
  anArr.unshift(elem);
  return anArr;
}

function addElementToEndOfArray(anArr, elem){
  return [...anArr, elem];
}

function destructivelyAddElementToEndOfArray(anArr, elem){
  anArr.push(elem);
  return anArr;
}

function accessElementInArray(anArr, idx){
  return anArr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(anArr){
  anArr.shift();
  return anArr;
}

function removeElementFromBeginningOfArray(anArr){
  return anArr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(anArr){
  anArr.pop()
  return anArr;
}

function removeElementFromEndOfArray(anArr){
  return anArr.slice(0,-1);
=======
  return anArr.unshift(elem);
>>>>>>> 27359489fb0f076d1dead181eb4db6724325649f
}
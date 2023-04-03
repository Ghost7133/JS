const arr = [false, undefined, '', 0, null, 1, 2, 3];
function cleanArray(testMassive) { 
  return arr.filter(Boolean);
}
console.log(cleanArray(arr));
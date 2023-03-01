const testMassive = [1,2,3,3,4,4,5,5,5,6]
function Double(arr) {
    let result = [];
    arr.forEach(function(el) {
      if(result.indexOf(el) === -1) {
        result.push(el);
      }
    });
    return result;
  }
console.log(Double(testMassive));
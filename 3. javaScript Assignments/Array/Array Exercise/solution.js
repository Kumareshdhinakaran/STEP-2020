// Print Reverse

function printReverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

// isUniform function

function isUniform(arr) {
  var initial = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== initial) {
      return false;
    }
  }
  return true;
}

//Sum of the array

function sumArray(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//MAximum of array

function maxArray(arr) {
  var maxi = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxi < arr[i]) {
      maxi = arr[i];
    }
  }
  return maxi;
}

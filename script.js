// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numberRange(start, end) {
    let range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range
}

console.log(numberRange(1, 10))

//Theres a weird (end) at the start of the log. IDK what its doing but the code is doing what was asked.

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

function rangeSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
  }
  
  let result = rangeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(result);

//The reduce, accumulator, and current methods
//Reduce "reduces" arrays into a single value. for some reason this just doesn't work by itself
//accumulator holds the result of each addition, like a snowball down the hill it grows as we add to it
//current is the snow itself, ready to be picked up off the hill and accumulated
//In this metaphor I suppose reduce is gravity?


// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]

//IDEAS
//If we ADD the array onto itself in reverse then pop all the bits of the original array that could work
//or we can do an for loop that logs backwards? like maybe it can take the nth value of an array so in the case of
//[1, 2, 3, 4, 5] the for loop cam look like for(let i = stringLength - 1; i >= 0; i--) {}
//that way we can get an brand new "reverse" array

function reverseArray(array) {
    let arrayMirror = [];
    for (let i = array.length - 1; i >= 0; i--){
        arrayMirror.push(array[i]);
    }
    return arrayMirror
}

console.log(reverseArray([1, 2, 3, 4]))
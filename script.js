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

//Theres a weird (end) at the start of the log. IDK what its doing but the code is doing what was asked. I guess its some VS code thing
//like when you have recursion the console will have an ever increasing number to the left of the output the (number) on the left tells the 
//string size
//Otherwise this code is pretty simple. we add too an array for every number 

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

//OK this time we can't just create a new array but must modify the current array
//My previous idea of adding the reverse array unto itself and popping out the old one may word
//lets try that

/*

let array = [5, 6, 7, 8]

function reverseArrayInPlace(array) {

    const arrayLength = array.length
    for (let i = array.length; i <= 0; i++) {
        array.push(i)
    }
    return array
}

console.log(reverseArrayInPlace(array))

*/

//OK apparently as is it does a infinite loop. whoops. Will use a const variable to fix
//Ok so when the array is 5, 6, 7, 8 it returns as 5, 6, 7, 8, 3, 2, 1, 0. Where did 4 go and why is it doing it like this?

//OK the POP PUSH idea may not work. I the value of I taking the place of a generic number when I wish it would be the the position of the array
//In the example of [5, 6, 7, 8] i = 0 would be 5 as it is in 0th place but i = 0 just means the number zero. Im gonna have to redo this
//For archival reasons ill comment it out.
//I suppose this might work if my is a set of numbers that includes zero and doesn't skip but thats obviously not the point of the assignment

//2nd attempt

function reverseArrayInPlace(array) {

    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      const temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;

    }

    return array;

  }
  
  const array = [5, 6, 7, 8];
  reverseArrayInPlace(array);
  console.log(array);

  //OK this a big departure from my last attempt but I found some very useful documentation and some trial and error
  //Lets break it down. the Math.floor is by far the more complicated bit.
  //Math.floor() always rounds down and returns an integer. the / 2 ensures the code runs at less than half the array
  //this is important because as we swap "start" elements with "end" elements by staying in the start half we don't 
  //accidentally swap up the latter half. ALSO because we are potentially working with an odd number
  //of elements in the arrays rounding up from a floating point will let us have a clearer "half way mark"
  //temp holds the index of I which is being swapped with the different values in the original array
  //each time the for loop runs it swaps the the pushes the first most element to the end
  //to do this we put the temp I will take the current I position
  //then the I position will be swapped to another place.
  // If I is 0 in a 4 length array then array[i] which is currently array[0] will become array[0] (see line 105)
  //Now we do it in reverse. we take the former end piece and put it on the back
  //line 106 takes the temp value and places it mirrored from the end
  //This works the same has 105 but the process is reversed i have a headache
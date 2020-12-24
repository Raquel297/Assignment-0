function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var count = 0; //This is our counter variable that will store all the instances of boolean values or strings in the arr object
  for(var i = 0; i < arr.length; i++){ //We loop through the entire array to check for boolean values or strings
    if(arr[i] === true || arr[i] === false || typeof arr[i] === 'string'){ //If we found a boolean value or string, then we add that instance to our counter variable 
      count += 1;
    }
  }
  return count; //We return our result
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;

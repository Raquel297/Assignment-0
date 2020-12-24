function sumOfAllOddNumbers(nums) {
  // Insert code here;
  var count = 0; //This is our counter variable that will store all the instances of odd numbers
  for(var i = 0; i < nums.length; i++){ //We loop through the entire array to check for odd numbers
    if(nums[i] % 2 != 0){ //If we found an odd number, then we add that instance to our counter variable 
      count += 1;
    }
  }
  return count; //We return our result
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;

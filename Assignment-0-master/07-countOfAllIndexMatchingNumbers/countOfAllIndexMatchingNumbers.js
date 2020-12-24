function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  var count = 0; //This is our counter variable that will store all the instances of a value being in its same index place
  for(var i = 0; i < nums.length; i++){ //We loop through the entire array to check for such instances 
    if(nums[i] == i){ //If we found value in nums that is equal to its position, then we add that instance to our counter variable 
      count += 1;
    }
  }
  return count; //We return our result
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;

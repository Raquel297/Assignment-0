function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var count = 0; //This is our counter variable that will store all the instances of values in [start, end]
  for(var i = 0; i < nums.length; i++){ //We loop through the entire array to check for such instances 
    if(nums[i] >= start && nums[] <= end){ //If we found a value such that start <= value <= end, then we add that instance to our counter variable 
      count += 1;
    }
  }
  return count; //We return our result
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;

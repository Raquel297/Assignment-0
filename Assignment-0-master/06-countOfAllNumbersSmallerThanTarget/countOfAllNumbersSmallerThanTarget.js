function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var count = 0; //This is our counter variable that will store all the instances of when a number in nums is less than our target
  for(var i = 0; i < nums.length; i++){ //We loop through the entire array to check for such instances 
    if(nums[i] < target){ //If the value in nums is less than the target value, then we add that instance to our counter variable 
      count += 1;
    }
  }
  return count; //We return our result
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;

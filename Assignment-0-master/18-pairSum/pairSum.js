function pairSum(nums, target) {
  // Insert code here;
  for(var i = 0; i < nums.length; i++){ 
    for(var j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;

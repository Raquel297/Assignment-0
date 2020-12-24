class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var mid = Math.floor(nums.length/2);
    if(nums.length === 1 && nums[0] != target){
       return false;
    }else if(nums[mid] === target){
       return true;
    }else if(mid > target){
       return binarySearch(nums.slice(0, mid), target);
    }else if(mid < target){
      return binarySearch(nums.slice(mid), target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
